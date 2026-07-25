package com.microservices.loan;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{id}")
    public Map<String, Object> getLoanDetails(@PathVariable String id) {
        Map<String, Object> response = new HashMap<>();
        response.put("loanId", id);
        response.put("loanType", "Home Loan");
        response.put("amount", 250000.00);
        response.put("status", "Approved");
        return response;
    }
}
