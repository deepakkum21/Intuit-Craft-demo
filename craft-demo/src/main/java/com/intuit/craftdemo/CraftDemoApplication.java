package com.intuit.craftdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@SpringBootApplication
public class CraftDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CraftDemoApplication.class, args);
	}

}
