import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FullProducts } from './FullProducts';

const baseUrl= environment.basePath+"product";

@Injectable({
  providedIn: 'root'
})
export class FullProductsService {

  constructor(private http:HttpClient) { }

  //get all products
  getProducts(){
    return this.http.get<any[]>(`${baseUrl}`);
  }

    //delete supplier
    deleteProduct(id:any){
      return this.http.delete(`${baseUrl}/${id}`);
    }
  
}
