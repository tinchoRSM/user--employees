import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { User } from '../models/User';
import { EmployeeService } from '../services/employee.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];  

  user?: User ;

  constructor(
    private employeService: EmployeeService,
    private userService: UserService,
    
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.getEmployees();

  }

  getEmployees(): void{
    this.employeService.getUserEmployees()
      .subscribe( res => this.employees = res.message)
  }

}
