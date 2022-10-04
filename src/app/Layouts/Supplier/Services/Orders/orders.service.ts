import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl=environment.basePath+"myOrder/supplier";


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
