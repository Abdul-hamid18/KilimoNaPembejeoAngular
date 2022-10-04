import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl=environment.basePath+"admin";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getProfile(id:any){
    return this.http.get<any[]>(`${baseUrl}/${id}`);
  }
}
