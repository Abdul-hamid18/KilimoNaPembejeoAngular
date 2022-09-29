import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl="http://localhost:8080/api/v1/supplier";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getProfile(id:any){
    return this.http.get<any[]>(`${baseUrl}/${id}`);
  }
}
