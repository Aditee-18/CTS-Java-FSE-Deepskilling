package com.tdd;

public class NotificationManager {
    private final EmailService emailService;

    public NotificationManager(EmailService emailService) {
        this.emailService = emailService;
    }

    public boolean sendNotification(String userEmail, String notificationText) {
        if (userEmail == null || userEmail.isEmpty()) {
            return false;
        }
        return emailService.sendEmail(userEmail, notificationText);
    }
}
