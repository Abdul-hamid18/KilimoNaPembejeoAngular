import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl="http://localhost:8080/api/v1/product";

@Injectable({
  providedIn: 'root'
})
export class FullProductsService {

  constructor(private http:HttpClient) { }

  //get all products
  getProducts(){
    return this.http.get<any[]>(`${baseUrl}`);
  }
  
}
