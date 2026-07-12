import sqlite3

def run_sql_exercises():
    conn = sqlite3.connect(':memory:')
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE Customers (
            CustomerId INTEGER PRIMARY KEY,
            Name TEXT,
            Age INTEGER,
            Balance REAL,
            IsVIP BOOLEAN DEFAULT 0
        )
    """)

    cursor.execute("""
        CREATE TABLE Loans (
            LoanId INTEGER PRIMARY KEY,
            CustomerId INTEGER,
            InterestRate REAL,
            FOREIGN KEY(CustomerId) REFERENCES Customers(CustomerId)
        )
    """)

    cursor.execute("""
        CREATE TABLE Accounts (
            AccountId INTEGER PRIMARY KEY,
            CustomerId INTEGER,
            AccountType TEXT,
            Balance REAL,
            FOREIGN KEY(CustomerId) REFERENCES Customers(CustomerId)
        )
    """)

    cursor.executemany("INSERT INTO Customers VALUES (?, ?, ?, ?, ?)", [
        (1, "Alice", 65, 12000.0, 0),
        (2, "Bob", 45, 8000.0, 0),
        (3, "Charlie", 70, 15000.0, 0)
    ])

    cursor.executemany("INSERT INTO Loans VALUES (?, ?, ?)", [
        (101, 1, 5.5),
        (102, 2, 6.0),
        (103, 3, 4.5)
    ])

    cursor.executemany("INSERT INTO Accounts VALUES (?, ?, ?, ?)", [
        (201, 1, "Savings", 12000.0),
        (202, 2, "Checking", 8000.0),
        (203, 3, "Savings", 15000.0)
    ])
    conn.commit()

    print("Before discount:")
    for row in cursor.execute("SELECT * FROM Loans"):
        print(row)

    cursor.execute("""
        UPDATE Loans
        SET InterestRate = InterestRate - 1.0
        WHERE CustomerId IN (
            SELECT CustomerId FROM Customers WHERE Age > 60
        )
    """)
    conn.commit()

    print("After age discount applied to customers > 60:")
    for row in cursor.execute("SELECT * FROM Loans"):
        print(row)

    print("\nBefore VIP status check:")
    for row in cursor.execute("SELECT * FROM Customers"):
        print(row)

    cursor.execute("""
        UPDATE Customers
        SET IsVIP = 1
        WHERE Balance > 10000.0
    """)
    conn.commit()

    print("After VIP promotion for balance > 10,000:")
    for row in cursor.execute("SELECT * FROM Customers"):
        print(row)

    print("\nSavings Accounts before monthly interest:")
    for row in cursor.execute("SELECT * FROM Accounts WHERE AccountType = 'Savings'"):
        print(row)

    cursor.execute("""
        UPDATE Accounts
        SET Balance = Balance * 1.01
        WHERE AccountType = 'Savings'
    """)
    conn.commit()

    print("Savings Accounts after 1% monthly interest:")
    for row in cursor.execute("SELECT * FROM Accounts WHERE AccountType = 'Savings'"):
        print(row)

    def transfer_funds(from_account, to_account, amount):
        try:
            cursor.execute("BEGIN TRANSACTION")
            cursor.execute("SELECT Balance FROM Accounts WHERE AccountId = ?", (from_account,))
            res = cursor.fetchone()
            if not res:
                raise ValueError("Source account not found")
            
            balance = res[0]
            if balance < amount:
                raise ValueError("Insufficient balance")

            cursor.execute("UPDATE Accounts SET Balance = Balance - ? WHERE AccountId = ?", (amount, from_account))
            cursor.execute("UPDATE Accounts SET Balance = Balance + ? WHERE AccountId = ?", (amount, to_account))
            conn.commit()
            print(f"Successfully transferred {amount} from {from_account} to {to_account}")
        except Exception as e:
            cursor.execute("ROLLBACK")
            print(f"Transfer failed: {e}")

    print("\nBefore fund transfer:")
    for row in cursor.execute("SELECT * FROM Accounts"):
        print(row)

    transfer_funds(201, 202, 2000.0)

    print("After fund transfer:")
    for row in cursor.execute("SELECT * FROM Accounts"):
        print(row)

    conn.close()

if __name__ == "__main__":
    run_sql_exercises()
