import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supplier } from './Supplier';

const baseUrl=environment.basePath+"supplier";
const passwordUrl = baseUrl+"/password"


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getProfile(id:any){
    return this.http.get<Supplier>(`${baseUrl}/${id}`);
  }

  updateProfile(id:any,profile:Supplier): Observable<Object>{
    return this.http.put(`${baseUrl}/${id}`,profile);
  }

  updatePassword(id:any,profile:Supplier): Observable<Object>{
    return this.http.put(`${passwordUrl}/${id}`,profile);
  }
}
