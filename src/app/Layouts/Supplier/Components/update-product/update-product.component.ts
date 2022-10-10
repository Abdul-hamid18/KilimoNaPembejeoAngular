import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  updateForm: FormGroup = new FormGroup({
    supplierId: new FormControl(localStorage.getItem("SuplierId")),
    productName: new FormControl("", [Validators.required]),
    productDescr: new FormControl("", [Validators.required]),
    productPrice: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required])
  });


  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.initializeUpdate();

  }

  initializeUpdate() {
    this.id = this.route.snapshot.params['id'];

    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;

      this.updateForm = new FormGroup({
        supplierId: new FormControl(localStorage.getItem("SuplierId")),
        productName: new FormControl(this.product.productName, [Validators.required]),
        productDescr: new FormControl(this.product.productDescr, [Validators.required]),
        productPrice: new FormControl(this.product.productPrice, [Validators.required]),
        category: new FormControl(this.product.category, [Validators.required])
      });

    });
  }

  implementUpdate() {
    this.productService.updateProduct(this.id, this.updateForm.value).subscribe(data => {
      this.goToProductList();
      alert("Taarifa za pembejeo yako zimesahihishwa kikamilifu")
    }, error => {
      alert("Taarifa za pembejeo yako  zimeshindwa kusahihishwa")
    }
    );
  }

  goToProductList() {
    this.router.navigate(['supplier-login/nav/products-list']);
  }

}
