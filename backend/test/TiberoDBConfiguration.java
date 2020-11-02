package com.innogrid.tabcloudit.batch.configure.db;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.boot.autoconfigure.SpringBootVFS;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
//@MapperScan(value = "com.test.api.mapper.first", sqlSessionFactoryRef = "firstSqlSessionFactory")
public class TiberoDBConfiguration {
	@Bean(name="tiberodbDatasource", destroyMethod="close")
	@Primary
	@ConfigurationProperties(prefix="datasource.tiberodb")
	public DataSource tiberodbDatasource() {
		return DataSourceBuilder.create().build();
	}
	
	@Bean(name="tiberodbSessionFactory")
	@Primary
	public SqlSessionFactory tiberodbSessionFactory(@Qualifier("tiberodbDatasource") DataSource tiberodbDatasource, ApplicationContext applicationContext) throws Exception {
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();

		sqlSessionFactoryBean.setDataSource(tiberodbDatasource);
		sqlSessionFactoryBean.setTypeAliasesPackage("com.innogrid.tabcloudit.batch.model");
		sqlSessionFactoryBean.setVfs(SpringBootVFS.class);
		sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath:mapper/tiberodb/**/*.xml"));
		sqlSessionFactoryBean.setConfigLocation(applicationContext.getResource("classpath:config/sql-map-config.xml"));
		
		return sqlSessionFactoryBean.getObject();		
	}
	
	@Bean(name="tiberodbSessionTemplate")
	@Primary
	public SqlSessionTemplate tiberodbSessionTemplate(@Qualifier("tiberodbSessionFactory") SqlSessionFactory tiberodbSessionFactory) {
		return new SqlSessionTemplate(tiberodbSessionFactory);
	}
	
    @Bean(name="tiberodbTransactionManager")
	@Primary
    public PlatformTransactionManager tiberodbTransactionManager(@Qualifier("tiberodbDatasource") DataSource tiberodbDatasource) {
        return new DataSourceTransactionManager(tiberodbDatasource);
    }
}
