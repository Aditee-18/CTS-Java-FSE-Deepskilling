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
public class NotificationManagerTest {
    @Mock
    private EmailService emailService;

    private NotificationManager notificationManager;

    @BeforeEach
    public void setUp() {
        notificationManager = new NotificationManager(emailService);
    }

    @Test
    public void testSendNotificationSuccess() {
        when(emailService.sendEmail("user@example.com", "Hello")).thenReturn(true);
        boolean result = notificationManager.sendNotification("user@example.com", "Hello");
        assertTrue(result);
        verify(emailService).sendEmail("user@example.com", "Hello");
    }

    @Test
    public void testSendNotificationInvalidEmail() {
        boolean result = notificationManager.sendNotification("", "Hello");
        assertFalse(result);
    }
}
