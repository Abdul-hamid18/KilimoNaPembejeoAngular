import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../Services/Product/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  hide = true;

  productForm: FormGroup = new FormGroup({
    supplierId: new FormControl(localStorage.getItem("SuplierId")),
    productName: new FormControl("", [Validators.required]),
    productDescr: new FormControl("", [Validators.required]),
    productPrice: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required])
  });

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  saveNewProduct() {
    this.productService.newProduct(this.productForm.value).subscribe(response => {
      this.router.navigate(['/supplier-login/nav/products-list'])
      alert("Pembejeo yako imesajiliwa kikamilifu");

    }, error => {
      alert("Pembejeo yako imeshindwa kusajiliwa");
    })
  };


}
