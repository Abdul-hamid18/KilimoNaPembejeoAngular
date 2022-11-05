import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Suppliers } from './Suppliers';

const baseUrl=environment.basePath+"supplier";

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