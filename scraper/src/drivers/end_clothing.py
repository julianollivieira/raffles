import requests
import json

from bs4 import BeautifulSoup
from utils import getRandomUserAgent
from pprint import pprint

def process(store):
    # Create an empty list to store the open raffles in
    openRaffles = list()

    # Get the content of the raffles page
    headers = { "User-Agent": getRandomUserAgent() }
    response = requests.get(store[2], headers=headers)

    # Set up beautiful soup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Get the NEXT DATA
    nextData = soup.find('script', {'id': '__NEXT_DATA__'}).text
    data = json.loads(nextData)

    # Get the upcoming raffles
    upcomingProducts = data['props']['initialProps']['pageProps']['upcomingProducts']

    # For each product in upcoming products, get the required data and append it to the open raffles list
    for product in upcomingProducts:
        openRaffles.append({
            "sku": product["magentoSku"],
            "url": "https://launches.endclothing.com/product/" + product["urlKey"],
            "releaseDate": product["releaseDate"],
        })
    
    return openRaffles