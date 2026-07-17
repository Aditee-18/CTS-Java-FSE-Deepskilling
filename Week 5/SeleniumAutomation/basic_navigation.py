from selenium import webdriver
from selenium.webdriver.chrome.service import Service

def run_navigation_test():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    
    driver = webdriver.Chrome(options=options)
    
    try:
        driver.get("https://example.com")
        title = driver.title
        url = driver.current_url
        
        assert "Example Domain" in title
        assert "example.com" in url
        
        print("Navigation test passed")
        print(f"Title: {title}")
        print(f"URL: {url}")
    finally:
        driver.quit()

if __name__ == "__main__":
    run_navigation_test()
