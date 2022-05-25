import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { regexValidators } from '../helpers/regex';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    id: 0,
    email: '',
    password: ''
  }

  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl("", [Validators.required, Validators.pattern(regexValidators.email)] ),
    password: new FormControl("", [Validators.required ])
  }); 

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(id: number): void{
    this.router.navigate(['dashboard']);
  }

  tryLogin(): void{

    if(!this.loginForm.valid){
      return;
    }

    this.user = this.loginForm.value;

    this.userService.loginUser(this.user)
      .subscribe((res) => {
        if(res.message !='failed'){
          this.userService.setUser(res.message);
          this.redirect(res.message.id);
          
        }
        else {
          this.loginForm.reset();
          this.loginForm.setErrors({invalidEmail: true})
        };
      });
  }
}
