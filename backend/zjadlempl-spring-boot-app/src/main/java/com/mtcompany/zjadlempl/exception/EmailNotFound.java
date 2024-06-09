package com.mtcompany.zjadlempl.exception;

import org.springframework.security.core.AuthenticationException;

public class EmailNotFound extends AuthenticationException {
    public EmailNotFound(String msg, Throwable cause) {
        super(msg, cause);
    }

    public EmailNotFound(String msg) {
        super(msg);
    }
}

