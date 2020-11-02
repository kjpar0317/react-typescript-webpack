package com.innogrid.tabcloudit.batch.common;

import org.springframework.batch.core.step.skip.SkipLimitExceededException;
import org.springframework.batch.core.step.skip.SkipPolicy;

import com.innogrid.tabcloudit.batch.exception.SkipException;

public class CustomSkipPolicy implements SkipPolicy {
//	private static final int MAX_SKIP_COUNT = 2;
//	private static final int INVALID_TX_AMOUNT_LIMIT = -1000;

	@Override
	public boolean shouldSkip(Throwable throwable, int skipCount) throws SkipLimitExceededException {
//		if (throwable instanceof SkipException && skipCount < MAX_SKIP_COUNT) {
//			return true;
//		}
		
		if(throwable instanceof SkipException) {
			return true;
		}

		return false;
	}
}
