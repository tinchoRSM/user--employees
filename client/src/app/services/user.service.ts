import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Employee } from '../models/Employee';
import { User } from '../models/User';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = "http://localhost:5000/users/login";
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
  ) { }

  setUser(user: User){
    this.user = user;
  }

  getUser(){
    return this.user
  }

  loginUser(user: User): Observable<any> {
    return this.http.post(this.userUrl, user, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Attempt to login`)),
        catchError(this.handleError<any>('Cound not login'))
      );
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
