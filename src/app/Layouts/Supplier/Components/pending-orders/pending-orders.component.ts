import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Orders } from '../../Services/Orders/Orders';
import { OrdersService } from '../../Services/Orders/orders.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
  displayedColumns: string[]=['No.', 'Customer Name', 'Customer Address', 'Customer Phone',
  'Product Name', 'Product Price','Quantity','Order Date','Actions']
  dataSource = new MatTableDataSource();
  orders!:Orders[]

  @ViewChild (MatPaginator) paginator!:MatPaginator;

  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.fetchOrders();
    this.dataSource.paginator = this.paginator;

  }

  fetchOrders(){
    this.orderService.getOrders(localStorage.getItem("SuplierId")).subscribe(response=>{
      this.dataSource=new MatTableDataSource(response)
      this.orders=response
      console.log(this.orders)
    });
  }
 


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}




