import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
chrome_options = Options()
chrome_options.add_argument("nwapp=./")

driver = webdriver.Chrome(executable_path='../nwjs-sdk-v0.14.3-osx-x64/chromedriver', chrome_options=chrome_options)

time.sleep(5) # Wait 5s to see the web page
search_box = driver.find_element_by_name('q')
search_box.send_keys('ChromeDriver')
search_box.submit()
time.sleep(5) # Wait 5s to see the search result
driver.quit()
