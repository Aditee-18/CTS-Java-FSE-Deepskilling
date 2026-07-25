package com.microservices.account;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{id}")
    public Map<String, Object> getAccountDetails(@PathVariable String id) {
        Map<String, Object> response = new HashMap<>();
        response.put("accountId", id);
        response.put("accountType", "Savings");
        response.put("balance", 5000.00);
        response.put("status", "Active");
        return response;
    }
}
