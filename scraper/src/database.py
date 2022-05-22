import psycopg2

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