import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl="http://localhost:8080/api/v1/supplier";

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http:HttpClient) { }

  //get all suppliers
   getSuppliers(){
    return this.http.get<any[]>(`${baseUrl}`);
  }

  //Add new supplier
   newSupplier(data:any){
    return this.http.post(`${baseUrl}`,data);
  }

  //delete supplier
  deleteSupplier(supplierId:any){
    return this.http.delete(`${baseUrl}/${supplierId}`);
  }
}