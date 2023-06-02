import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    contact: '',
    salary: 0
  };

  constructor(private employeeService: EmployeeService) { }

  onSubmit(): void {
    this.employeeService.addEmployee(this.employee)
      .subscribe(() => {
        // Reset the form
        this.employee = {
          id: 0,
          name: '',
          email: '',
          contact: '',
          salary: 0
        };
        // Show success message or perform any other actions
      });
  }
}
