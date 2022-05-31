import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
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
        catchError(this.handleError<any>('Cound not login'))
      );
  }

  logOutUser(): void{
    let removeToken = localStorage.removeItem('authToken');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
