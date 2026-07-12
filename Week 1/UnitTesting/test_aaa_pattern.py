import unittest

class BankAccount:
    def __init__(self, initial_balance=0):
        self.balance = initial_balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount

class TestBankAccount(unittest.TestCase):
    def setUp(self):
        self.account = BankAccount(100.0)

    def tearDown(self):
        self.account = None

    def test_deposit(self):
        amount_to_deposit = 50.0
        self.account.deposit(amount_to_deposit)
        self.assertEqual(self.account.balance, 150.0)

    def test_withdraw(self):
        amount_to_withdraw = 30.0
        self.account.withdraw(amount_to_withdraw)
        self.assertEqual(self.account.balance, 70.0)

if __name__ == "__main__":
    unittest.main()
