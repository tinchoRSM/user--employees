import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL = "http://localhost:5000/users/employees";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getUserEmployees(id: number) : Observable<any>{
    const userId = {userId: id};

    return this.http.post(this.apiURL, userId, this.httpOptions)
        .pipe(
          tap(_ => console.log(`Attempt getting users employees`)),
          catchError(this.handleError<any>('Cound get users employees'))
        );

  }

  getEmployeeByid(id: number) : Observable<any>{
    const employeeId = {employeeId: id};

    return this.http.post(this.apiURL + `/getEmployee`,employeeId, this.httpOptions)
    .pipe(
      tap(_ => console.log(`Attempt get employee by id `)),
      catchError(this.handleError<any>('Cound not get employee by id '))
    );
  }

  createEmployee(employee: Employee) : Observable<any>{
    return this.http.post(this.apiURL+ `/createEmployee`, employee, this.httpOptions)
        .pipe(
          tap(_ => console.log(`Attempt creating employee`)),
          catchError(this.handleError<any>('Cound get users employees'))
        );

  }

  updateEmployeeByid(id: number, data: Employee) : Observable<any>{
    const employee = {
      id: id,
      data: data
    }
    
    return this.http.put(this.apiURL + `/editEmployee`,employee, this.httpOptions)
    .pipe(
      tap(_ => console.log(`Attempt updating employee`)),
      catchError(this.handleError<any>('Cound not update employee'))
    );
  }

  deleteEmployeeByid(id: number) : Observable<any>{
    return this.http.delete(this.apiURL+ `/deleteEmployee/${id}`,this.httpOptions)
    .pipe(
      tap(_ => console.log(`Attempt deleting employee`)),
      catchError(this.handleError<any>('Cound not delete employee'))
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
