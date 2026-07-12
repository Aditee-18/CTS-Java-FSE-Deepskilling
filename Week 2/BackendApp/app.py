from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import get_db, engine, Base
from services import CountryService, EmployeeService

Base.metadata.create_all(bind=engine)

app = FastAPI()

class CountryCreate(BaseModel):
    country_code: str
    country_name: str

class EmployeeCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    country_id: int

@app.get("/api/countries")
def get_countries(db: Session = Depends(get_db)):
    service = CountryService(db)
    return service.get_countries()

@app.get("/api/countries/{code}")
def get_country_by_code(code: str, db: Session = Depends(get_db)):
    service = CountryService(db)
    country = service.get_country_by_code(code)
    if not country:
        raise HTTPException(status_code=404, detail="Country not found")
    return country

@app.post("/api/countries")
def add_country(country: CountryCreate, db: Session = Depends(get_db)):
    service = CountryService(db)
    existing = service.get_country_by_code(country.country_code)
    if existing:
        raise HTTPException(status_code=400, detail="Country code already exists")
    return service.add_country(country.country_code, country.country_name)

@app.get("/api/employees")
def get_employees(db: Session = Depends(get_db)):
    service = EmployeeService(db)
    return service.get_employees()

@app.get("/api/employees/{emp_id}")
def get_employee_by_id(emp_id: int, db: Session = Depends(get_db)):
    service = EmployeeService(db)
    employee = service.get_employee_by_id(emp_id)
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employee

@app.post("/api/employees")
def create_employee(employee: EmployeeCreate, db: Session = Depends(get_db)):
    service = EmployeeService(db)
    return service.create_employee(
        employee.first_name,
        employee.last_name,
        employee.email,
        employee.country_id
    )

@app.put("/api/employees/{emp_id}")
def update_employee(emp_id: int, employee: EmployeeCreate, db: Session = Depends(get_db)):
    service = EmployeeService(db)
    updated = service.update_employee(
        emp_id,
        employee.first_name,
        employee.last_name,
        employee.email,
        employee.country_id
    )
    if not updated:
        raise HTTPException(status_code=404, detail="Employee not found")
    return updated

@app.delete("/api/employees/{emp_id}")
def delete_employee(emp_id: int, db: Session = Depends(get_db)):
    service = EmployeeService(db)
    success = service.delete_employee(emp_id)
    if not success:
        raise HTTPException(status_code=404, detail="Employee not found")
    return {"detail": "Employee deleted successfully"}
