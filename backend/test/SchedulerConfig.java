package com.innogrid.tabcloudit.batch.config;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.Trigger;
import org.springframework.scheduling.TriggerContext;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.scheduling.support.CronTrigger;

import com.innogrid.tabcloudit.batch.common.BeanUtils;
import com.innogrid.tabcloudit.batch.model.JobInfo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
public class SchedulerConfig implements SchedulingConfigurer {
	@Autowired
	private JobLauncher jobLauncher;
	
	@Resource(name = "tiberodbSessionFactory")
	private SqlSessionFactory tiberodbSessionFactory;
	
	
    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {

    	try(SqlSession session = tiberodbSessionFactory.openSession()) {
        	List<JobInfo> list = session.selectList("com.innogrid.tabcloudit.batch.tiberodb.jobInfo.selectJobInfo");
        	
			for (JobInfo jobInfo : list) {
				taskRegistrar.addTriggerTask(new Runnable() {
					@Override
					public void run() {
			            try {
				            JobParameters jobParameters = new JobParametersBuilder().addLong("time", System.currentTimeMillis())
				            		.toJobParameters();

			            	jobLauncher.run((Job) BeanUtils.getBean(jobInfo.getJobId()), jobParameters);
						} catch (JobExecutionAlreadyRunningException | JobRestartException
								| JobInstanceAlreadyCompleteException | JobParametersInvalidException e) {
							log.error("{}", e.getMessage());
						}
					}
				}, new Trigger() {
					@Override
					public Date nextExecutionTime(TriggerContext triggerContext) {
						CronTrigger trigger = new CronTrigger(jobInfo.getCronExpression());
						Date nextExec = trigger.nextExecutionTime(triggerContext);
						return nextExec;
					}
				});
			}        	
    	}

    }
}
