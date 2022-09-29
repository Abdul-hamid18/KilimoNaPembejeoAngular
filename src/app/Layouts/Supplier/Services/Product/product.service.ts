import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl="http://localhost:8080/api/v1/product";
const baseUrl2="http://localhost:8080/api/v1/product/supplier";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
// getProducts
  getProducts(id:any){
    return this.http.get<any[]>(`${baseUrl2}/${id}`);
  }

   //Add new product
   newProduct(data:any){
    return this.http.post(`${baseUrl}`,data);
  }

  // delete product
  deleteProduct(productId:any){
    return this.http.delete(`${baseUrl}/${productId}`);
  }
}
