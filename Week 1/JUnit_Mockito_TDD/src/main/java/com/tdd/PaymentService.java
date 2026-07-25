package com.tdd;

public class PaymentService {
    private final PaymentGateway paymentGateway;

    public PaymentService(PaymentGateway paymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    public boolean makePayment(String accountId, double amount) {
        if (amount <= 0) {
            return false;
        }
        return paymentGateway.processPayment(accountId, amount);
    }
}
