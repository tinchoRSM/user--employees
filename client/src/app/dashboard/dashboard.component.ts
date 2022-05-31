import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user?: User

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  logOut(){
    this.userService.logOutUser();
  }

}
