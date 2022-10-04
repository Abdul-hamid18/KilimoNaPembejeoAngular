import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../../Services/Product/product.service';
import { Products } from '../../Services/Product/Products';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id!: number;
  product: Products = new Products();
  constructor(private productService:ProductService,
    private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeUpdate();
   
  }

  initializeUpdate(){
    this.id = this.route.snapshot.params['id'];

    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
    });

  }

  implementUpdate(){
    this.productService.updateProduct(this.id, this.product).subscribe( data =>{
      this.goToProductList();
      alert("Product Updated Successfully")
    },error=>{
      alert("Failed to update Product")
    }
    );
  }

  goToProductList(){
    this.router.navigate(['supplier-login/nav/products-list']);
  }

}
