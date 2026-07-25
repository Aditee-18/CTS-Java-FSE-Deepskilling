package com.spring.core;

import com.spring.core.service.CustomerService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringCoreApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringCoreApplication.class, args);
    }

    @Bean
    public CommandLineRunner runner(CustomerService customerService) {
        return args -> {
            customerService.getAllCustomers().forEach(c -> 
                System.out.println(c.getId() + " : " + c.getName() + " : " + c.getEmail())
            );
        };
    }
}
