import unittest
from unittest.mock import Mock

class SmtpClient:
    def send_email(self, recipient, subject, body):
        pass

class EmailNotifier:
    def __init__(self, smtp_client: SmtpClient):
        self.smtp_client = smtp_client

    def notify_user(self, email, message):
        self.smtp_client.send_email(email, "Notification", message)

class TestEmailNotifier(unittest.TestCase):
    def test_notify_user_calls_smtp(self):
        mock_smtp = Mock(spec=SmtpClient)
        notifier = EmailNotifier(mock_smtp)
        
        notifier.notify_user("user@example.com", "Hello World")
        
        mock_smtp.send_email.assert_called_once_with("user@example.com", "Notification", "Hello World")

if __name__ == "__main__":
    unittest.main()
