package com.intuit.craftdemo.security;

import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CustomFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
         if(request.getRequestURI().equalsIgnoreCase("/craft/v1/fail")) {
             System.out.println("----------fail filter");
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
            return;
         }
         filterChain.doFilter(request,response);
    }
}
