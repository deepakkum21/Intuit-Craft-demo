package com.intuit.craftdemo.controller;

import com.intuit.craftdemo.errorhandling.exceptions.ForbiddenException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/craft/v1")
public class CraftDemoController {

    private final Logger logger = LoggerFactory.getLogger(CraftDemoController.class);

    // success resource
    @GetMapping(value = "/success")
    public ResponseEntity<String> handleSuccess(@CookieValue("username") String userName) {
        logger.info("handleSuccess controller");
        logger.info(" user name {}", userName);
        if(userName == null || !userName.equalsIgnoreCase("admin")) {
            throw new ForbiddenException(userName+" : username is not allowed");
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
