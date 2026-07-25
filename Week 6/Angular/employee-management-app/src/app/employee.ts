export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
  designation: string;
  salary: number;

  constructor(id: number = 0, firstName: string = '', lastName: string = '', emailId: string = '', designation: string = '', salary: number = 0) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.designation = designation;
    this.salary = salary;
  }
}
