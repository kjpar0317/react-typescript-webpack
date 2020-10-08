package com.innogrid.tabcloudit.batch;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableAsync
@EnableScheduling
@EnableCaching
//@EnableBatchProcessing
@SpringBootApplication
public class BatchApplication {
//	@Autowired
//	private WebApplicationContext context;
//
//	@Autowired
//	private JobLauncher jobLauncher;

	public static void main(String[] args) throws JobExecutionAlreadyRunningException, JobRestartException,
			JobInstanceAlreadyCompleteException, JobParametersInvalidException {
		if (args.length > 0) {
			SpringApplication app = new SpringApplication(BatchApplication.class);
			app.setWebApplicationType(WebApplicationType.NONE);
			ConfigurableApplicationContext ctx = app.run(args);
			JobLauncher jobLauncher = ctx.getBean(JobLauncher.class);

		
			JobParametersBuilder jobParamsBuilder = new JobParametersBuilder().addString("JobID", String.valueOf(System.currentTimeMillis()));
			String jobBean = "";

			for(String arg : args) {
				if(arg.contains("=")) {
					String [] tmpArr = arg.split("=");
					
					jobParamsBuilder.addString(tmpArr[0].trim(), tmpArr[1].trim());
				} else if(arg.startsWith("-")) {
					// Options
				} else {
					jobBean = arg;
				}
			}
			
			// job bean이 없는 경우는 웹으로 간주한다.
//			if("".equals(jobBean)) {
//				// 웹으로 구동 원할때만
//				SpringApplication.run(BatchApplication.class, args);
//			}
			
			Job job = ctx.getBean(jobBean, Job.class);
			jobLauncher.run(job, jobParamsBuilder.toJobParameters());

			// 배치만 쓴다면 exit 필수
//			System.exit(0);
		} else {
//			System.err.println("배치 잡 이름을 입력해 주세요. EX) java -jar app.jar updateTop100CoinPriceJob");
//			SpringApplication.run(BatchApplication.class, args);
		}
	}

//	@Scheduled(cron = "*/5 * * * * *")
//	public void perform() throws Exception {
//		JobParameters param = new JobParametersBuilder().addString("JobID", String.valueOf(System.currentTimeMillis()))
//				.toJobParameters();
//
//		jobLauncher.run(getJob("processJob"), param);
//	}
//
//	private Job getJob(String jobName) {
//		return (Job) context.getBean(jobName);
//	}
}
