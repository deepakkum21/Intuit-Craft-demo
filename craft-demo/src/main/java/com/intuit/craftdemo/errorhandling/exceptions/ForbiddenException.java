package com.intuit.craftdemo.errorhandling.exceptions;

public class ForbiddenException extends  RuntimeException{

    public ForbiddenException() {
        super();
    }

    public ForbiddenException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public ForbiddenException(final String message) {
        super(message);
    }
}
