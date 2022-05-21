# import json
import threading
# import logging
# import requests

from database import Database
from utils import split
from process import process

# Initialize a database connection
database = Database()

# Get the stores and chunk the stores list into 4 arrays of ~equal lists
stores = database.getStores()
chunks = list(split(stores, 4))

# Start a new thread for each chunk and append it to the thread list
threads = list()
for chunk in chunks:
    x = threading.Thread(target=process, args=(chunk,))
    threads.append(x)
    x.start()



# from utils import split


# def process_chunk(chunk):
#     for store in chunk:
#         r = requests.get(store['url'], headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"})
#         print(r.text)

# # Open & load the JSON config file
# f = open('config.json')
# config = json.load(f)

# format = "%(asctime)s: %(message)s"
# logging.basicConfig(format=format, level=logging.INFO, datefmt="%H:%M:%S")

# # Create 'thread_count' equal chunks from 'stores'
# chunks = list(split(config['stores'], config['thread_count']))

# threads = list()

# for chunk in chunks:
#     # Start a new thread for each chunk and append it to the thread list
#     x = threading.Thread(target=process_chunk, args=(chunk,))
#     threads.append(x)
#     x.start()

# for index, thread in enumerate(threads):
#     logging.info("Before joining thread %d.", index)
#     thread.join()
#     logging.info("Thread %d done", index)
