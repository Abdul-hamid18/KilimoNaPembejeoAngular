import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/Layouts/Supplier/Services/Product/product.service';
import Swal from 'sweetalert2';
import { Products } from '../../Services/Product/Products';
import { NotifierComponent } from '../notifier/notifier.component';


@Component({
  selector: 'app-product-list',
  styleUrls: ['products-list.component.css'],
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent implements OnInit {

  displayedColumns: string[] = ['No.', 'Product Name', 'Product Price', 'Category', 'Product Description', 'Actions']
  dataSource = new MatTableDataSource();
  products!: Products[]

  durationInSeconds = 5;

  hide = true;


  productForm: FormGroup = new FormGroup({
    supplierId: new FormControl(localStorage.getItem("SuplierId")),
    productId: new FormControl(0, [Validators.required]),
    productName: new FormControl("", [Validators.required]),
    productDescr: new FormControl("", [Validators.required]),
    productPrice: new FormControl("", [Validators.required]),
    category: new FormControl("",[Validators.required])
  });

  updateForm: FormGroup = new FormGroup({
    supplierId: new FormControl(localStorage.getItem("SuplierId")),
    productName: new FormControl("", [Validators.required]),
    productDescr: new FormControl("", [Validators.required]),
    productPrice: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required])
  });





  constructor(private productService: ProductService, private router: Router,
    public dialog: MatDialog, private _snackBar: MatSnackBar,
    config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.fetchProducts()
  }


  fetchProducts() {
    this.productService.getProducts(localStorage.getItem("SuplierId")).subscribe(response => {
      this.dataSource = new MatTableDataSource(response)
      this.products = response

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }


  deleteProduct(product: any) {
    Swal.fire({
      title: 'Je una uhakika wa kuifuta hii pembejeo?',
      text: 'Hautaweza tena kuierejesha baada ya kuifuta!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ndio, Ifute!',
      cancelButtonText: 'Hapana, Iache'
    })
      .then((result) => {
        if (result.value) {
          this.productService.deleteProduct(product.productId)
            .subscribe(response => {
              this.fetchProducts();
            }, error => {
              console.log(error);
            })
          Swal.fire(
            'Umethibitisha!',
            'Pembejeo yako imefutwa kikamilifu.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Umeghairi!',
            'Pembejeo yako iko salama :)',
            'error'
          );
        }
      });
  }

  openToSave(addForm: any) {
    this.modalService.open(addForm)
  }

  openToEdit(editForm: any) {
    this.modalService.open(editForm)
  }

  openSm(deleteModal: any) {
    this.modalService.open(deleteModal, { size: 'sm', modalDialogClass: 'danger-modal' });
  }


  saveNewProduct() {
    this.productService.newProduct(this.productForm.value).subscribe(response => {
      Swal.fire(
        'Hongera...',
        'Pembejeo yako imesajiliwa kikamilifu!',
        'success')
      this.fetchProducts();


    }, error => {
      Swal.fire(
        'Pole...',
        'Pembejeo yako imeshindwa kusajiliwa!',
        'error')
      this.fetchProducts();
    })
  }

  editProduct(product: Products) {
    this.updateForm = new FormGroup({
      supplierId: new FormControl(localStorage.getItem("SuplierId")),
      productId: new FormControl(product.productId, [Validators.required]),
      productName: new FormControl(product.productName, [Validators.required]),
      productDescr: new FormControl(product.productDescr, [Validators.required]),
      productPrice: new FormControl(product.productPrice, [Validators.required]),
      category: new FormControl(product.category, [Validators.required])
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.updateForm.controls["productId"].value, this.updateForm.value).subscribe(response => {
      this.fetchProducts();
      alert("Owner has been update");
    }, error => {
      alert("Fail to update new owner");
    })
  };







}



