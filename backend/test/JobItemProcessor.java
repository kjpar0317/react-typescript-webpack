package com.innogrid.tabcloudit.batch.job.step.processor;

import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.stereotype.Component;

import com.innogrid.tabcloudit.batch.model.Test;

@StepScope
@Component
public class JobItemProcessor implements ItemProcessor<Test, Test> {
	@Override
	public Test process(Test test) throws Exception {
		return test;
	}
}
