import random
import requests

from bs4 import BeautifulSoup

userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393",
]

def split(a, n):
    k, m = divmod(len(a), n)
    return (a[i*k+min(i, m):(i+1)*k+min(i+1, m)] for i in range(n))

def getRandomUserAgent():
    return random.choice(userAgents)

# ?? EHHHHHHH IDK MAN
def getSneakerInfoWithSKU(sku):
    headers = { "User-Agent": getRandomUserAgent() }
    response = requests.get("https://stockx.com/search?s=" + sku, headers=headers)

    # Set up beautiful soup
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # get first div of sneaker
    browseGrid = soup.select_one('div[id=browse-grid] a')
    link = "https://stockx.com" + browseGrid.get('href')

    sneakerResponse = requests.get(link, headers=headers)

    # Set up beautiful soup for the sneaker
    sneakerSoup = BeautifulSoup(sneakerResponse.text, 'html.parser')

    primaryProductTitle = sneakerSoup.select_one('h1[data-component="primary-product-title"]').text
    secondaryProductTitle = sneakerSoup.select_one('span[data-component="secondary-product-title"]').text

    # if "Jordan" in primaryProductTitle

    print(primaryProductTitle)
    print(secondaryProductTitle)