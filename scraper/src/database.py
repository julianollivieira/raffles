import psycopg2
import uuid
from datetime import datetime, timezone
from utils import getSneakerInfoWithSKU

class Database:
    connection = None
    cursor = None

    def __init__(self):
        # Connect to the postgreSQL database
        self.connection = psycopg2.connect(
            database="raffles",
            user="postgres",
            password="password",
            host="db",
            port="5432",
        )

        # Setup a cursor
        self.cursor = self.connection.cursor()

    def getStores(self):
        self.cursor.execute("SELECT * FROM stores")
        return self.cursor.fetchall()

    def saveRaffles(self, stores):
        dt = datetime.now(timezone.utc)
        for store in stores:
            for raffle in store["openRaffles"]:
                print(raffle)
                self.cursor.execute(
                    "INSERT INTO raffles (id, store_id, sku, closes_on, url, created_at, updated_at) VALUES (%s, %s, %s, %s, %s, %s, %s)",
                    (
                        str(uuid.uuid4()),
                        store["store"][0],
                        raffle["sku"],
                        raffle["releaseDate"],
                        raffle["url"],
                        dt,
                        dt,
                    ),
                )
                self.connection.commit()