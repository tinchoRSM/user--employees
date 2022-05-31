import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { regexValidators } from '../helpers/regex';
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

  createForm: FormGroup; 

  constructor(
    private userService: UserService,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private location: Location

  ) {
    this.createForm = this.formBuilder.group({
      name: new FormControl("", [Validators.required, Validators.pattern(regexValidators.name)]),
      adress: new FormControl("", [Validators.required ]),
      phone: new FormControl("", [Validators.required, Validators.pattern(regexValidators.phone)]),
      department: new FormControl("", [Validators.required, Validators.pattern(regexValidators.department)]),
      position: new FormControl("", [Validators.required, Validators.pattern(regexValidators.postition)]),
      salary: new FormControl("", [Validators.required, Validators.pattern(regexValidators.salary) ])
  }); }

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
    if(this.createForm.valid){
      this.employeeService.createEmployee(this.employee)
        .subscribe(()=> this.goBack());
    }
  }
}
