package com.intuit.craftdemo.config;

import com.intuit.craftdemo.security.SecurityConstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private RequestInterceptor requestInterceptor;

    // registers the interceptor
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(requestInterceptor);
    }

    // CORS config
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(SecurityConstant.ALLOWED_ORIGIN)
                .allowedHeaders(SecurityConstant.ALLOWED_HEADERS)
                .allowedMethods(SecurityConstant.ALLOWED_METHODS)
                .allowCredentials(true);
    }
}
