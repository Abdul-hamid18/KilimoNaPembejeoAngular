import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl="http://localhost:8080/api/v1/supplier";
const loginUrl="login";
@Injectable({
  providedIn: 'root'
})
export class SupplierLoginService {

  constructor(private http:HttpClient) { }

  Login(data:any){
    return this.http.post(`${baseUrl}/${loginUrl}`,data);
  }


  //Register new supplier
  Register(data:any){
    return this.http.post(`${baseUrl}`,data);
  }

  
}
