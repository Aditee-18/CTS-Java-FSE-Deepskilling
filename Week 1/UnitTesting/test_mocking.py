import unittest
from unittest.mock import Mock

class PaymentGateway:
    def charge(self, card_details, amount):
        pass

class PaymentService:
    def __init__(self, gateway: PaymentGateway):
        self.gateway = gateway

    def process_payment(self, card_details, amount):
        return self.gateway.charge(card_details, amount)

class TestPaymentService(unittest.TestCase):
    def test_payment_success(self):
        mock_gateway = Mock(spec=PaymentGateway)
        mock_gateway.charge.return_value = True
        
        service = PaymentService(mock_gateway)
        res = service.process_payment("1234-5678", 100.0)
        
        self.assertTrue(res)
        mock_gateway.charge.assert_called_once_with("1234-5678", 100.0)

if __name__ == "__main__":
    unittest.main()
