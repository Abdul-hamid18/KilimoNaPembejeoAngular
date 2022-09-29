import { Component, OnInit } from '@angular/core';
import { Orders } from '../../Services/Orders/Orders';
import { OrdersService } from '../../Services/Orders/orders.service';
import { ProductService } from '../../Services/Product/product.service';
import { Products } from '../../Services/Product/Products';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders!:Orders[]
  products!:Products[]

  constructor(private orderService:OrdersService,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.fetchOrders();
    this.fetchProducts();
    
  }

  fetchOrders(){
    this.orderService.getOrders(localStorage.getItem("SuplierId")).subscribe(response=>{
      this.orders=response
    });
  }

  fetchProducts(){
    this.productService.getProducts(localStorage.getItem("SuplierId")).subscribe(response=>{
      this.products=response
    });
  }


}
