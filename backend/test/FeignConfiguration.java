package com.innogrid.tabcloudit.batch.config;

import org.springframework.cloud.openfeign.FeignFormatterRegistrar;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.datetime.standard.DateTimeFormatterRegistrar;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import feign.RequestInterceptor;
import feign.Retryer;

@Configuration
public class FeignConfiguration {

//	@Bean
//	public Contract feignContract() {
//		return new feign.Contract.Default();
//	}

//	@Bean
//	public BasicAuthRequestInterceptor basicAuthRequestInterceptor() {
//		return new BasicAuthRequestInterceptor("user", "password");
//	}

	@Bean
	public FeignFormatterRegistrar localDateFeignFormatterRegister() {
		return registry -> {
			DateTimeFormatterRegistrar registrar = new DateTimeFormatterRegistrar();
			registrar.setUseIsoFormat(true);
			registrar.registerFormatters(registry);
		};
	}

	@Bean
	public RequestInterceptor requestInterceptor() {
		return requestTemplate -> {
			requestTemplate.header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
		};
	}
	
	@Bean
	public Retryer retryer() {
		return new Retryer.Default(1000, 2000, 3);
	}

//	@Bean
//	public ErrorDecoder decoder() {
//		return (methodKey, response) -> {
//			if (HttpStatusClass.SERVER_ERROR.contains(response.status())) {
//
//				return new RetryableException(format("%s 요청이 성공하지 못했습니다. Retry 합니다. - status: %s, headers: %s",
//						methodKey, response.status(), response.headers()), null);
//			}
//
//			return new IllegalStateException(format("%s 요청이 성공하지 못했습니다. - status: %s, headers: %s", methodKey,
//					response.status(), response.headers()));
//		};
//	}
}
