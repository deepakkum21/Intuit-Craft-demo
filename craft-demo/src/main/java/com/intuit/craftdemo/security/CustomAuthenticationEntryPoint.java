package com.intuit.craftdemo.security;

import org.springframework.security.web.AuthenticationEntryPoint;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, org.springframework.security.core.AuthenticationException authException) throws IOException, ServletException {
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.setContentType(SecurityConstant.APPLICATION_JSON_CHARSET_UTF_8);
        response.setHeader(SecurityConstant.ACCESS_CONTROL_ALLOW_ORIGIN, SecurityConstant.ALLOWED_ORIGIN);
        response.setHeader(SecurityConstant.ACCESS_CONTROL_ALLOW_CREDENTIALS, SecurityConstant.ALLOW_CREDENTIALS);
        response.setHeader(SecurityConstant.ACCESS_CONTROL_ALLOW_METHODS, SecurityConstant.ALLOWED_METHODS);
        response.setHeader(SecurityConstant.ACCESS_CONTROL_ALLOW_HEADERS,
                SecurityConstant.ORIGIN_CONTENT_TYPE_ACCEPT);
        if (SecurityConstant.OPTIONS.equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        }
    }
}
