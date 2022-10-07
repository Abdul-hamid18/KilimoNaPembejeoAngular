import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Layouts/Supplier/Services/Product/product.service';
import { Products } from '../../Services/Product/Products';

@Component({
  selector: 'app-product-list',
  styleUrls: ['products-list.component.css'],
  templateUrl:  './products-list.component.html',
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[]=['No.', 'Product Name', 'Product Price', 'Product Description', 'Actions']
  dataSource = new MatTableDataSource();
  products!: Products[]

  @ViewChild (MatPaginator) paginator!:MatPaginator;

  constructor(private productService:ProductService, private router: Router) { }

  ngOnInit(): void {
    this.fetchProducts()
    this.dataSource.paginator = this.paginator;
  }
 

  fetchProducts(){
    this.productService.getProducts(localStorage.getItem("SuplierId")).subscribe(response=>{
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

  deleteProduct(product:any){
    this.productService.deleteProduct(product.productId).subscribe(response=>{
      this.fetchProducts();
      alert("Pembejeo yako imefutwa kikamilifu");
    },error=>{
      alert("Pembejeo yako imeshindwa kufutwa");
    });
  }

  public updateProduct(id:number){
    this.router.navigate(['supplier-login/nav/update-product',{id}]);
  }

}



