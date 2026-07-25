package com.tdd;

public interface PaymentGateway {
    boolean processPayment(String accountId, double amount);
}
