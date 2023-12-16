import requests
from bs4 import BeautifulSoup

response = requests
soup = BeautifulSoup(response.content, "html.parser")
print(soup)

title = soup.title.text
content = soup.find("p").text
links = [a["href"] for a in soup.find_all("a", href=True)]

# url = "https://www.example.com"
# response = requests.get(url)

# parse info into data structure making it easier to read
# use bs4