package com.innogrid.tabcloudit.batch.job.step.writer;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemWriter;
import org.springframework.stereotype.Component;

import com.innogrid.tabcloudit.batch.model.Test;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@StepScope
public class JobItemWriter implements ItemWriter<Test> {
//	@Value("#{jobParameters[requestDate]}")
//	private String requestDate;
	
	@Resource(name = "tiberodbSessionFactory")
	private SqlSessionFactory tiberodbSessionFactory;
	
	@Override
	public void write(List<? extends Test> test) throws Exception {
		try(SqlSession sqlSession = tiberodbSessionFactory.openSession()) {
			log.info("{}", test);
			sqlSession.insert("com.innogrid.tabcloudit.batch.tiberodb.test.insertDummy", test);
		}
		
//		log.info("{}", test);

	}
}
