package com.innogrid.tabcloudit.batch.common;

import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.interceptor.DefaultTransactionAttribute;

public class BatchUtils {
	public static DefaultTransactionAttribute getDefaultTransactionAttribute() {
		DefaultTransactionAttribute attribute = new DefaultTransactionAttribute();
		
		attribute.setPropagationBehavior(Propagation.REQUIRED.value()); //
		attribute.setIsolationLevel(Isolation.DEFAULT.value());	// https://effectivesquid.tistory.com/entry/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-Isolation-Level
		attribute.setTimeout(30);

		return attribute;
	}
	
	public static TaskExecutor getDefaultTaskExecutor(int poolSize) {
		ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor(); // (2)
        
		executor.setCorePoolSize(poolSize);
        executor.setMaxPoolSize(poolSize);
        executor.setThreadNamePrefix("multi-thread-");
        executor.setWaitForTasksToCompleteOnShutdown(Boolean.TRUE);
        executor.setAwaitTerminationSeconds(30);
        executor.initialize();
        
        return executor;
	}
}
