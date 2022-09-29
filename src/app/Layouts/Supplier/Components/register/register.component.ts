import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierLoginService } from '../../Services/SupllierLogin/supplier-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hidepassword=true;
  hideconfirm=true;

  registerForm: FormGroup = new FormGroup({
    supplierRegNo: new FormControl("", [Validators.required]),
    supplierFName: new FormControl("", [Validators.required]),
    supplierLName: new FormControl("", [Validators.required]),
    supplierAddress: new FormControl("", [Validators.required]),
    supplierPhoneNo: new FormControl("", [Validators.required]),
    supplierEmail: new FormControl("", [Validators.required, Validators.email]),
    supplierPassword: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });


  constructor(private loginService:SupplierLoginService, private router:Router) { }

  ngOnInit(): void {  }

  register() {
    this.loginService.Register(this.registerForm.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['/supplier-login'])
      alert("Registered Successfully");

    }, error => {
      alert("Failed to register");
    })
  };


}


