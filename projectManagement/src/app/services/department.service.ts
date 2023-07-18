import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) {

  }

  getDepartments():Observable<Department[]>{
    return this.httpClient.get<Department[]>('https://localhost:7125/api/Departments')
                          .pipe(catchError((err:HttpErrorResponse)=>{
                            console.log(err.message);
                            return throwError(()=>new Error(err.statusText));
                          }));
                           
  }


}
