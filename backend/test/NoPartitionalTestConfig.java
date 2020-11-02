package com.innogrid.tabcloudit.batch.job.config;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.batch.MyBatisPagingItemReader;
import org.mybatis.spring.batch.builder.MyBatisPagingItemReaderBuilder;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.JobScope;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

import com.innogrid.tabcloudit.batch.common.BatchUtils;
import com.innogrid.tabcloudit.batch.common.CustomSkipPolicy;
import com.innogrid.tabcloudit.batch.job.listener.JobCompleteListener;
import com.innogrid.tabcloudit.batch.job.step.listener.TestStepListener;
import com.innogrid.tabcloudit.batch.job.step.processor.JobItemProcessor;
import com.innogrid.tabcloudit.batch.job.step.writer.JobItemWriter;
import com.innogrid.tabcloudit.batch.model.Test;

@Configuration
@EnableBatchProcessing
public class NoPartitionalTestConfig {
	@Autowired
	public JobBuilderFactory jobBuilderFactory;
	@Autowired
	public StepBuilderFactory stepBuilderFactory;
	
	@Resource(name = "tiberodbSessionFactory")
	private SqlSessionFactory tiberodbSessionFactory;
	@Resource(name="tiberodbTransactionManager")
	private PlatformTransactionManager tiberodbTransactionManager;
	
	@Autowired
	private JobCompleteListener jobListener;

	@Autowired
	private TestStepListener stepListner;
	@Autowired
	private JobItemProcessor processor;
	@Autowired
	private JobItemWriter writer;
	
	@Value("${batch.chunk-size}")
	private String chunkSize;
	
	@Bean
	@StepScope
	public MyBatisPagingItemReader<Test> noPartitionJobReader() {
		  return new MyBatisPagingItemReaderBuilder<Test>()
			      .sqlSessionFactory(tiberodbSessionFactory)
			      .queryId("com.innogrid.tabcloudit.batch.tiberodb.test.selectNoPartitional")
			      .pageSize(Integer.parseInt(chunkSize))
			      .build();
	}
	
	@Bean(name="noPartitionJob")
	public Job noPartitionJob() throws Exception {
		return jobBuilderFactory.get("noPartitionJob")
				.incrementer(new RunIdIncrementer())
				.listener(jobListener)
				.start(noPartitionStep())
				.preventRestart()
				.build();
	}

	@Bean
	@JobScope
	public Step noPartitionStep() throws Exception {
		return stepBuilderFactory.get("noPartitionStep")
				.<Test, Test> chunk(Integer.parseInt(chunkSize))
				.reader(noPartitionJobReader())
				.processor(processor)
				.writer(writer)
				.faultTolerant()
				.skipPolicy(new CustomSkipPolicy())
				.listener(stepListner)
				.allowStartIfComplete(true)
				.transactionManager(tiberodbTransactionManager)
				.transactionAttribute(BatchUtils.getDefaultTransactionAttribute())
				.build();
	}
}
