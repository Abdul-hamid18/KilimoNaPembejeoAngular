import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuppliersService } from '../../Services/Suppliers/suppliers.service';

@Component({
  selector: 'app-register-supplier',
  templateUrl: './register-supplier.component.html',
  styleUrls: ['./register-supplier.component.css']
})
export class RegisterSupplierComponent implements OnInit {
  hide = true;

  supplierForm: FormGroup = new FormGroup({
    supplierRegNo: new FormControl("", [Validators.required]),
    supplierFName: new FormControl("", [Validators.required]),
    supplierLName: new FormControl("", [Validators.required]),
    supplierAddress: new FormControl("", [Validators.required]),
    supplierPhoneNo: new FormControl("", [Validators.required]),
    supplierEmail: new FormControl("", [Validators.required, Validators.email]),
    supplierPassword: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });


  constructor(private supplierSerice: SuppliersService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNewSupplier() {
    this.supplierSerice.newSupplier(this.supplierForm.value).subscribe(response => {
      this.router.navigate(['admin-login/admin-nav/suppliers-list'])
      .then(() => {
        window.location.reload();
      });
      alert("Msambazaji amesajiliwa kikamilifu");

    }, error => {
      alert("Msambazaji ameshindwa kusajiliwa");
    })
  };


}
