package com.innogrid.tabcloudit.batch.configure.db;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
//@MapperScan(value = "com.test.api.mapper.first", sqlSessionFactoryRef = "firstSqlSessionFactory")
public class LocalDBConfiguration {
	@Bean(name="localDatasource", destroyMethod="close")
	@Primary
	@ConfigurationProperties(prefix="datasource.local")
	public DataSource localDatasource() {
		return DataSourceBuilder.create().build();
	}
	
	@Bean(name="localSessionFactory")
	@Primary
	public SqlSessionFactory localSessionFactory(@Qualifier("localDatasource") DataSource localDatasource, ApplicationContext applicationContext) throws Exception {
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
		sqlSessionFactoryBean.setDataSource(localDatasource);
		sqlSessionFactoryBean.setTypeAliasesPackage("com.innogrid.tabcloudit.batch.model");
		sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath:mapper/mariadb/**/*.xml"));
		return sqlSessionFactoryBean.getObject();		
	}
	
	@Bean(name="localSessionTemplate")
	@Primary
	public SqlSessionTemplate localSessionTemplate(@Qualifier("localSessionFactory") SqlSessionFactory localSessionFactory) {
		return new SqlSessionTemplate(localSessionFactory);
	}
}
