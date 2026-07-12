import unittest

class Calculator:
    def add(self, a, b):
        return a + b

    def divide(self, a, b):
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b

class TestAssertionsExample(unittest.TestCase):
    def test_add_assertions(self):
        calc = Calculator()
        self.assertEqual(calc.add(2, 3), 5)
        self.assertNotEqual(calc.add(2, 3), 6)

    def test_divide_assertions(self):
        calc = Calculator()
        self.assertEqual(calc.divide(6, 2), 3.0)
        self.assertRaises(ValueError, calc.divide, 6, 0)

if __name__ == "__main__":
    unittest.main()
