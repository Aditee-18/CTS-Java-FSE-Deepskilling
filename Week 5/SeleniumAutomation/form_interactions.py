from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def run_form_test():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    
    driver = webdriver.Chrome(options=options)
    
    try:
        driver.get("https://the-internet.herokuapp.com/login")
        
        username_field = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "username"))
        )
        password_field = driver.find_element(By.ID, "password")
        login_button = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
        
        username_field.send_keys("tomsmith")
        password_field.send_keys("SuperSecretPassword!")
        login_button.click()
        
        flash_message = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "flash"))
        )
        
        assert "You logged into a secure area!" in flash_message.text
        print("Form interaction test passed")
    finally:
        driver.quit()

if __name__ == "__main__":
    run_form_test()
