from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def run_dropdown_test():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    
    driver = webdriver.Chrome(options=options)
    
    try:
        driver.get("https://the-internet.herokuapp.com/dropdown")
        
        dropdown_element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "dropdown"))
        )
        
        select = Select(dropdown_element)
        
        select.select_by_value("1")
        selected_option = select.first_selected_option
        assert selected_option.text == "Option 1"
        
        select.select_by_visible_text("Option 2")
        selected_option = select.first_selected_option
        assert selected_option.text == "Option 2"
        
        print("Dropdown selection test passed")
    finally:
        driver.quit()

if __name__ == "__main__":
    run_dropdown_test()
