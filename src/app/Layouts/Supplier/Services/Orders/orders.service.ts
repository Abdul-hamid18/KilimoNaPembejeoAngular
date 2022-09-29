import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl="http://localhost:8080/api/v1/myOrder/supplier";


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  //get Orders
  getOrders(id:any){
    return this.http.get<any[]>(`${baseUrl}/${id}`);
  }
}
