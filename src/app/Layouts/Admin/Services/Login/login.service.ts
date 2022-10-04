import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl=environment.basePath+"admin/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  AdminLogin(data:any){
    return this.http.post(`${baseUrl}`,data);
  }
}
