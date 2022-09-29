import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl="http://localhost:8080/api/v1/farmer";

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
  deleteFarmer(farmerId:any){
    return this.http.delete(`${baseUrl}/${farmerId}`);
  }

  //update farmer

  updateFarmer(farmerId:any,data:any){
    return this.http.put(`${baseUrl}/${farmerId}`,data);
  }
  
}
