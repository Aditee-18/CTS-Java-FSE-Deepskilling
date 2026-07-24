import unittest
from selenium import webdriver
from pages.login_page import LoginPage

class TestLoginPOM(unittest.TestCase):
    def setUp(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--headless")
        self.driver = webdriver.Chrome(options=options)

    def tearDown(self):
        self.driver.quit()

    def test_valid_login(self):
        login_page = LoginPage(self.driver)
        login_page.load()
        login_page.login("tomsmith", "SuperSecretPassword!")
        
        flash_text = login_page.get_flash_message()
        self.assertIn("You logged into a secure area!", flash_text)

    def test_invalid_login(self):
        login_page = LoginPage(self.driver)
        login_page.load()
        login_page.login("invaliduser", "wrongpassword")
        
        flash_text = login_page.get_flash_message()
        self.assertIn("Your username is invalid!", flash_text)

if __name__ == "__main__":
    unittest.main()
