import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Farmers } from './Farmers';

const baseUrl= environment.basePath+"farmer";

@Injectable({
  providedIn: 'root'
})
export class FarmersService {

  constructor(private http:HttpClient) { }
//get all farmers
  getFarmers(){
    return this.http.get<any[]>(`${baseUrl}`);
  }

  //Add new farmer
  newFarmer(data:any){
    return this.http.post(`${baseUrl}`,data);
  }
// delete farmer
  deleteFarmer(id:any){
    return this.http.delete(`${baseUrl}/${id}`);
  }

  //update farmer

  updateFarmer(id:any,data:any){
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  
}
