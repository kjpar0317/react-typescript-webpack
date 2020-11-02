package com.innogrid.tabcloudit.batch.exception;

@SuppressWarnings("serial")
public class SkipException extends Exception {
	private String errMsg;
	
	public SkipException(String errMsg) {
		this.errMsg = errMsg;
	}
	
	@Override
	public String getMessage() {
		return this.errMsg;
	}
}
