package com.spring.jpa;

import com.spring.jpa.entity.Country;
import com.spring.jpa.service.CountryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringDataJpaApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringDataJpaApplication.class, args);
    }

    @Bean
    public CommandLineRunner runner(CountryService countryService) {
        return args -> {
            countryService.addCountry(new Country("IN", "India"));
            countryService.addCountry(new Country("US", "United States"));
            countryService.addCountry(new Country("JP", "Japan"));

            countryService.getAllCountries().forEach(c -> 
                System.out.println(c.getCode() + " - " + c.getName())
            );
        };
    }
}
