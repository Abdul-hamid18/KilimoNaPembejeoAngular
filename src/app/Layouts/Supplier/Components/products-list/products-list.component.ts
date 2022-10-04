import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
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

  constructor(private productSerice:ProductService, private router: Router) { }

  ngOnInit(): void {
    this.fetchProducts()
    this.dataSource.paginator = this.paginator;

  }
 

  fetchProducts(){
    this.productSerice.getProducts(localStorage.getItem("SuplierId")).subscribe(response=>{
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
    this.productSerice.deleteProduct(product.productId).subscribe(response=>{
      this.fetchProducts();
      alert("Product has been deleted");
    },error=>{
     
      alert("Fail to delete product");
    })
  }


  public updateProduct(id:number){
    this.router.navigate(['supplier-login/nav/update-product',{id}]);
  
}

}



