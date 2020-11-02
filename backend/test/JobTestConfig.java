package com.innogrid.tabcloudit.batch.job.config;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.JobScope;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.ItemReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

import com.innogrid.tabcloudit.batch.common.BatchUtils;
import com.innogrid.tabcloudit.batch.common.ColumnRangePartitioner;
import com.innogrid.tabcloudit.batch.common.CustomSkipPolicy;
import com.innogrid.tabcloudit.batch.common.LinkedListItemReader;
import com.innogrid.tabcloudit.batch.job.listener.JobCompleteListener;
import com.innogrid.tabcloudit.batch.job.step.listener.TestStepListener;
import com.innogrid.tabcloudit.batch.job.step.processor.JobItemProcessor;
import com.innogrid.tabcloudit.batch.job.step.writer.JobItemWriter;
import com.innogrid.tabcloudit.batch.model.Test;

@Configuration
@EnableBatchProcessing
public class JobTestConfig {
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
	
	@Value("${batch.partition-size}")
	private String partitionSize; 
    
    @Bean
    public ColumnRangePartitioner partitioner() {
    	ColumnRangePartitioner columnRangePartitioner = new ColumnRangePartitioner();
    	columnRangePartitioner.init(tiberodbSessionFactory, "SELECT_TEST_DUMMY");
        return columnRangePartitioner;
    }
    
    // tibero 1.7 지원 안 함
//	@Bean
//	@StepScope
//	public MyBatisCursorItemReader<Test> reader(@Value("#{stepExecutionContext}") Test contextParams) {
//	  return new MyBatisCursorItemReaderBuilder<Test>()
//	      .sqlSessionFactory(tiberodbSessionFactory)
//	      .queryId("com.innogrid.tabcloudit.batch.tiberodb.test.selectDummy")
//	      .parameterValues(contextParams)
//	      .build();
//	}
	
    @Bean
	@StepScope
	public ItemReader<Test> processJobReader(@Value("#{stepExecutionContext}") Map<String, Object> contextParams) {
		try(SqlSession session = tiberodbSessionFactory.openSession()) {
			return new LinkedListItemReader<>(session.selectList("com.innogrid.tabcloudit.batch.tiberodb.test.selectDummy", contextParams));
		} catch (Exception e) {
			return null;
		}
	}
	
	@Bean(name="processJob")
	public Job processJob() throws Exception {
		return jobBuilderFactory.get("테스트잡")
				.incrementer(new RunIdIncrementer())
				.listener(jobListener)
				.start(testMasterStep())
				.preventRestart()
				.build();
	}

	@Bean
	@JobScope
	public Step testMasterStep() throws Exception {
		return stepBuilderFactory.get("test Master Step")
				.partitioner(testSlaveStep1().getName(), partitioner())
				.step(testSlaveStep1())
				.gridSize(Integer.parseInt(partitionSize))
				.taskExecutor(BatchUtils.getDefaultTaskExecutor(Integer.parseInt(partitionSize)))
				.allowStartIfComplete(true)
				.build();
	}

	@Bean
	public Step testSlaveStep1() throws Exception {
		return stepBuilderFactory.get("test Slave step")
				.<Test, Test> chunk(Integer.parseInt(chunkSize))
				.reader(processJobReader(null))
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
