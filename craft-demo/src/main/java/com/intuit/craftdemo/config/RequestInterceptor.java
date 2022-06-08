package com.intuit.craftdemo.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Component
public class RequestInterceptor implements HandlerInterceptor {
    private final Logger logger = LoggerFactory.getLogger(RequestInterceptor.class);
    private final String TRACER = "tracer";

    // this is generate a unique id to the trace the service and for which url
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String requestUrl = request.getRequestURI();
        String traceId = request.getHeader(TRACER);
        if(traceId == null) {
            logger.info("Generating tracer");
            traceId = UUID.randomUUID().toString().replace("-", "");
        }
        logger.info("TRACER ID: {}  | Request URL: {}",traceId,requestUrl);
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
