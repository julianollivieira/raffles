import threading
import logging

from database import Database
from utils import split
from process import process
from pprint import pprint

# Setup logging
format = "%(asctime)s: %(message)s"
logging.basicConfig(format=format, level=logging.INFO, datefmt="%H:%M:%S")

# Initialize a database connection
database = Database()

# Get the stores and chunk the stores list into 4 arrays of ~equal lists
stores = database.getStores()
chunks = list(split(stores, 4))

# Create an empty list to store the stores + the open raffes
results = list()

# Start a new thread for each chunk and append it to the thread list
threads = list()
for chunk in chunks:
    x = threading.Thread(target=process, args=(chunk, results))
    threads.append(x)
    x.start()

# Wait for all threads to finish
for index, thread in enumerate(threads):
    logging.info("Before joining thread %d.", index)
    thread.join()
    logging.info("Thread %d done", index)

pprint(results)