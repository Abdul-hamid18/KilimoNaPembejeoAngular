import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl=environment.basePath+"supplier";
const loginUrl= baseUrl+"/login";

@Injectable({
  providedIn: 'root'
})
export class SupplierLoginService {

  constructor(private http:HttpClient) { }

  Login(data:any){
    return this.http.post(`${loginUrl}`,data);
  }


  //Register new supplier
  Register(data:any){
    return this.http.post(`${baseUrl}`,data);
  }

  
}
