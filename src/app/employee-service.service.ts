import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor( private http:HttpClient) { }
  getEmployees(){
    return this.http.get<any>('http://localhost:5000/empl')
  }
}
        