package com.example.demo.exception;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.dto.JsonResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(Exception.class)
	@ResponseBody
	public ResponseEntity<JsonResult> ExceptionHandler(Exception e) throws Exception {
		//1. 로깅
		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors));
		log.error(errors.toString());
		
		//2. JSON 응답
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.fail(errors.toString()));
	}
}
