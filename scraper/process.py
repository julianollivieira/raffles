import requests
import random
from bs4 import BeautifulSoup

userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393",
]

def process(chunk):
    for store in chunk:
        # Get a random user agent
        randomUserAgent = random.choice(userAgents)

        # Get the content of the raffles page
        r = requests.get(store[2], headers={"User-Agent": randomUserAgent})
    
        # Set up beautiful soup
        soup = BeautifulSoup(r.text, 'html.parser')

        productsDiv = soup.select('div[id*=plp-item-]')

        print(productsDiv)
