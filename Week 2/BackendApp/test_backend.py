import unittest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database import Base, get_db
from app import app
import models

SQLALCHEMY_DATABASE_URL = "sqlite:///./test_temp.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)

class TestBackendApp(unittest.TestCase):
    def setUp(self):
        Base.metadata.create_all(bind=engine)
        db = TestingSessionLocal()
        country = models.Country(id=1, country_code="IN", country_name="India")
        db.add(country)
        db.commit()
        db.close()

    def tearDown(self):
        Base.metadata.drop_all(bind=engine)

    def test_get_countries(self):
        response = client.get("/api/countries")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]["country_code"], "IN")

    def test_add_country(self):
        payload = {"country_code": "US", "country_name": "United States"}
        response = client.post("/api/countries", json=payload)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["country_code"], "US")

    def test_create_employee(self):
        payload = {
            "first_name": "John",
            "last_name": "Doe",
            "email": "john.doe@example.com",
            "country_id": 1
        }
        response = client.post("/api/employees", json=payload)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["email"], "john.doe@example.com")

if __name__ == "__main__":
    unittest.main()
