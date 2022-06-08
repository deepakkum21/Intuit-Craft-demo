package com.intuit.craftdemo.errorhandling;

import com.intuit.craftdemo.errorhandling.exceptions.ForbiddenException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class GlobalException extends ResponseEntityExceptionHandler {

    private final Logger logger = LoggerFactory.getLogger(GlobalException.class);
    private static final String FORBIDDEN_USER_MSG = "User is forbidden";

    // for handling unauthorized users 403
    @ExceptionHandler({ForbiddenException.class})
    public ResponseEntity<Object> handleForbiddenException(ForbiddenException ex, final WebRequest request) {
        ExceptionResponse exceptionResponse = new ExceptionResponse();
        exceptionResponse.setStatus(HttpStatus.FORBIDDEN);
        exceptionResponse.setMessage(FORBIDDEN_USER_MSG);
        exceptionResponse.setError(ex.getMessage());
        return new ResponseEntity<>(
                exceptionResponse, HttpStatus.FORBIDDEN);
    }

}
