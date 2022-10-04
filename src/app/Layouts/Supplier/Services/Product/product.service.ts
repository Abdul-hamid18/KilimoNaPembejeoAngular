import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from './Products';

const baseUrl=environment.basePath+"product";
const baseUrl2=baseUrl+"/supplier";


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
  deleteProduct(id:any){
    return this.http.delete(`${baseUrl}/${id}`);
  }

  updateProduct(id:any,product:Products): Observable<Object>{
    return this.http.put(`${baseUrl}/${id}`,product);
  }

  getProductById(id:any){
    return this.http.get<Products>(`${baseUrl}/${id}`)
  }
}
