import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(private empService: EmployeeServiceService) {}

  employeeArray = [];

  ngOnInit(): void {
    this.empService.getEmployees().subscribe((res: any) => {
      console.log({ res });
    });
  }
}
