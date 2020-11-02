package com.innogrid.tabcloudit.batch.config;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.springframework.batch.core.configuration.annotation.DefaultBatchConfigurer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.repository.support.JobRepositoryFactoryBean;
import org.springframework.batch.support.DatabaseType;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
public class TiberoBatchConfigurer extends DefaultBatchConfigurer {
	@Resource(name = "tiberodbDatasource")
	private DataSource dataSource;
	
	@Resource(name="tiberodbTransactionManager")
	private PlatformTransactionManager tiberodbTransactionManager;
	
	@Override
	protected JobRepository createJobRepository() throws Exception {
		JobRepositoryFactoryBean factory = new JobRepositoryFactoryBean();
		
		factory.setDataSource(dataSource);
		factory.setDatabaseType(DatabaseType.ORACLE.getProductName());
		factory.setTransactionManager(tiberodbTransactionManager);
		factory.afterPropertiesSet();
		
		return factory.getObject();
	}
}
