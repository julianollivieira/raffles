import json
import threading
import logging
import time

# Helper functions
def split(a, n):
    k, m = divmod(len(a), n)
    return (a[i*k+min(i, m):(i+1)*k+min(i+1, m)] for i in range(n))

def process_chunk(chunk):
    time.sleep(2)

# Open & load the JSON config file
f = open('config.json')
config = json.load(f)

format = "%(asctime)s: %(message)s"
logging.basicConfig(format=format, level=logging.INFO, datefmt="%H:%M:%S")

# Create 'thread_count' equal chunks from 'stores'
chunks = list(split(config['stores'], config['thread_count']))

threads = list()

for chunk in chunks:
    # Start a new thread for each chunk and append it to the thread list
    x = threading.Thread(target=process_chunk, args=(chunk,))
    threads.append(x)
    x.start()

for index, thread in enumerate(threads):
    logging.info("Before joining thread %d.", index)
    thread.join()
    logging.info("Thread %d done", index)
