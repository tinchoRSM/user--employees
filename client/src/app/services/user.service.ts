import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Employee } from '../models/Employee';
import { User } from '../models/User';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:5000/users/login";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private user: User = {
    id: 0,
    email: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  setUser(user: User){
    this.user = user;
  }

  getUser(){
    return this.user
  }

  isLogedIn(): boolean{
    let authToken = localStorage.getItem('authToken');
    return authToken !== null ? true : false;
  }

  loginUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Attempt to login`)),
        catchError(this.handleError)
      );
  }

  logOutUser(): void{
    let removeToken = localStorage.removeItem('authToken');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
}
}
