import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FullProductsService } from '../../Services/FullProducts/full-products.service';

@Component({
  selector: 'app-full-products-list',
  templateUrl: './full-products-list.component.html',
  styleUrls: ['./full-products-list.component.css']
})
export class FullProductsListComponent implements OnInit {
  displayedColumns: string[]=['No.', 'Product Name', 'Product Price', 'Supplier Name','Supplier Address','Supplier Phone', 'Actions']
  dataSource = new MatTableDataSource();
  products:any[]=[];

  @ViewChild (MatPaginator) paginator!:MatPaginator;

  constructor(private productSerice:FullProductsService) { }

  ngOnInit(): void {
    this.fetchProducts()
    this.dataSource.paginator = this.paginator;

  }
 

  fetchProducts(){
    this.productSerice.getProducts().subscribe(response=>{
      this.dataSource=new MatTableDataSource(response)
      this.products=response

      console.log(this.dataSource)
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