package com.innogrid.tabcloudit.batch.job.step.listener;

import org.springframework.batch.core.ExitStatus;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.core.StepExecutionListener;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class TestStepListener implements StepExecutionListener {
    @Override
    public void beforeStep(StepExecution stepExecution) {
        log.info("StepExecutionListener - beforeStep");
    }
    
    @Override
    public ExitStatus afterStep(StepExecution stepExecution) {
    	
        log.info("StepExecutionListener - afterStep");
        return ExitStatus.COMPLETED;
    }
}
