package com.innogrid.tabcloudit.batch.exception;

@SuppressWarnings("serial")
public class SkipLimitExceededException extends Exception {
	private String errMsg;
	
	public SkipLimitExceededException(String errMsg) {
		this.errMsg = errMsg;
	}
	
	@Override
	public String getMessage() {
		return this.errMsg;
	}
}
