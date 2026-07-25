import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    new Employee(1, 'Ramesh', 'Fadatare', 'ramesh@gmail.com', 'Senior Developer', 75000),
    new Employee(2, 'Sanjay', 'Jadhav', 'sanjay@gmail.com', 'Tech Lead', 95000),
    new Employee(3, 'Priya', 'Sharma', 'priya@gmail.com', 'QA Engineer', 60000)
  ];

  constructor() {}

  getEmployeesList(): Observable<Employee[]> {
    return of([...this.employees]);
  }

  getEmployeeById(id: number): Observable<Employee> {
    const emp = this.employees.find(e => e.id === id);
    if (!emp) {
      throw new Error(`Employee not found with id: ${id}`);
    }
    return of({ ...emp });
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const newId = this.employees.length > 0 ? Math.max(...this.employees.map(e => e.id)) + 1 : 1;
    const newEmployee = { ...employee, id: newId };
    this.employees.push(newEmployee);
    return of(newEmployee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    const index = this.employees.findIndex(e => e.id === id);
    if (index !== -1) {
      this.employees[index] = { ...employee, id };
      return of(this.employees[index]);
    }
    throw new Error(`Employee not found with id: ${id}`);
  }

  deleteEmployee(id: number): Observable<void> {
    this.employees = this.employees.filter(e => e.id !== id);
    return of(undefined);
  }
}
