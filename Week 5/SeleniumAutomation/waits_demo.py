from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def run_waits_test():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    
    driver = webdriver.Chrome(options=options)
    
    try:
        driver.get("https://the-internet.herokuapp.com/dynamic_loading/1")
        
        start_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "#start button"))
        )
        start_button.click()
        
        finish_text = WebDriverWait(driver, 15).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "#finish h4"))
        )
        
        assert finish_text.text == "Hello World!"
        print("Explicit wait test passed")
    finally:
        driver.quit()

if __name__ == "__main__":
    run_waits_test()
