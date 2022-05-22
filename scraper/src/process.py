import requests
from bs4 import BeautifulSoup
from utils import getRandomUserAgent

from drivers.end_clothing import process as process_end_clothing

def process(chunk, results):
    for store in chunk:
        if store[3] == 'end_clothing':
            results.append({
                "store": store,
                "openRaffles": process_end_clothing(store)
            })