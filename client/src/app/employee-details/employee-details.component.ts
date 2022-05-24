import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void{
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeByid(employeeId)
      .subscribe(res => this.employee = res.message);
  }

  goBack(): void{
    this.location.back();
  }

  updateEmployee(): void{
    if(this.employee){
      this.employeeService.updateEmployeeByid(this.employee.id,this.employee)
        .subscribe(()=> this.goBack());
    }
  }

  deleteEmployee(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.deleteEmployeeByid(employeeId)
      .subscribe(()=> this.goBack());
    
  }

}
