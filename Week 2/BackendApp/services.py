from sqlalchemy.orm import Session
import models

class CountryService:
    def __init__(self, db: Session):
        self.db = db

    def get_countries(self):
        return self.db.query(models.Country).all()

    def get_country_by_code(self, code: str):
        return self.db.query(models.Country).filter(models.Country.country_code == code).first()

    def add_country(self, country_code: str, country_name: str):
        db_country = models.Country(country_code=country_code, country_name=country_name)
        self.db.add(db_country)
        self.db.commit()
        self.db.refresh(db_country)
        return db_country

class EmployeeService:
    def __init__(self, db: Session):
        self.db = db

    def get_employees(self):
        return self.db.query(models.Employee).all()

    def get_employee_by_id(self, emp_id: int):
        return self.db.query(models.Employee).filter(models.Employee.id == emp_id).first()

    def create_employee(self, first_name: str, last_name: str, email: str, country_id: int):
        db_employee = models.Employee(
            first_name=first_name,
            last_name=last_name,
            email=email,
            country_id=country_id
        )
        self.db.add(db_employee)
        self.db.commit()
        self.db.refresh(db_employee)
        return db_employee

    def update_employee(self, emp_id: int, first_name: str, last_name: str, email: str, country_id: int):
        db_employee = self.get_employee_by_id(emp_id)
        if db_employee:
            db_employee.first_name = first_name
            db_employee.last_name = last_name
            db_employee.email = email
            db_employee.country_id = country_id
            self.db.commit()
            self.db.refresh(db_employee)
        return db_employee

    def delete_employee(self, emp_id: int):
        db_employee = self.get_employee_by_id(emp_id)
        if db_employee:
            self.db.delete(db_employee)
            self.db.commit()
            return True
        return False
