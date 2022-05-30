import { Component } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-employees';

  loged = true;

  user: User = {
    id: 1,
    email: "tincho@agv.com",
    password: "123456"
  }

  login(): void{
    this.loged = true;
  }
    

}
