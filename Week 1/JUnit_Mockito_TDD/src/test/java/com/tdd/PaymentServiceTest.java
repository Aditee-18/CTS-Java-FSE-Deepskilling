package com.tdd;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class PaymentServiceTest {
    @Mock
    private PaymentGateway paymentGateway;

    private PaymentService paymentService;

    @BeforeEach
    public void setUp() {
        paymentService = new PaymentService(paymentGateway);
    }

    @Test
    public void testMakePaymentSuccess() {
        when(paymentGateway.processPayment("ACC123", 100.0)).thenReturn(true);
        boolean result = paymentService.makePayment("ACC123", 100.0);
        assertTrue(result);
        verify(paymentGateway).processPayment("ACC123", 100.0);
    }

    @Test
    public void testMakePaymentInvalidAmount() {
        boolean result = paymentService.makePayment("ACC123", -50.0);
        assertFalse(result);
    }
}
