from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def run_alert_test():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    
    driver = webdriver.Chrome(options=options)
    
    try:
        driver.get("https://the-internet.herokuapp.com/javascript_alerts")
        
        trigger_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "button[onclick='jsAlert()']"))
        )
        trigger_button.click()
        
        alert = WebDriverWait(driver, 10).until(EC.alert_is_present())
        alert_text = alert.text
        assert alert_text == "I am a JS Alert"
        alert.accept()
        
        result_text = driver.find_element(By.ID, "result").text
        assert "You successfully clicked an alert" in result_text
        
        print("Alert handling test passed")
    finally:
        driver.quit()

if __name__ == "__main__":
    run_alert_test()
