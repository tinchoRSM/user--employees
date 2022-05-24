import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = {
    id: 0,
    name: "",
    adress: "",
    phone: "",
    department: "",
    position: "",
    salary: 0,
    userId: 0
  }

  constructor(
    private userService: UserService,
    private employeeService: EmployeeService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId(): void{
    this.employee.userId = this.userService.getUser().id;
  }

  goBack():void {
    this.location.back();
  }

  createEmployee(): void{
    this.employeeService.createEmployee(this.employee)
        .subscribe(()=> this.goBack());
  }
}
