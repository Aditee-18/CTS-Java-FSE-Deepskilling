package com.spring.core.repository;

import com.spring.core.model.Customer;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CustomerRepository {
    private final List<Customer> customers = new ArrayList<>();

    public CustomerRepository() {
        customers.add(new Customer(1, "John Doe", "john@example.com"));
        customers.add(new Customer(2, "Jane Smith", "jane@example.com"));
    }

    public List<Customer> findAll() {
        return customers;
    }

    public Customer findById(int id) {
        return customers.stream()
                .filter(c -> c.getId() == id)
                .findFirst()
                .orElse(null);
    }
}
