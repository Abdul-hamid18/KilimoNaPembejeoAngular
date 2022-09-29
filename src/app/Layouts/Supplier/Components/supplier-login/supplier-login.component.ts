import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierLoginService } from '../../Services/SupllierLogin/supplier-login.service';

@Component({
  selector: 'app-supplier-login',
  templateUrl: './supplier-login.component.html',
  styleUrls: ['./supplier-login.component.css']
})
export class SupplierLoginComponent implements OnInit {
  myId:any
  supplierId!:number
  hide = true;

  loginForm:FormGroup = new FormGroup({
    supplierId: new FormControl(0),
    supplierEmail: new FormControl("", [Validators.required, Validators.email]),
    supplierPassword: new FormControl("", [Validators.required])
  });
  

  constructor(private loginService:SupplierLoginService,
    private router:Router) { }

  ngOnInit(): void {
  
  }


  login() {
    this.loginService.Login(this.loginForm.value).subscribe(response => {
      console.log(response);
      this.myId=response
      localStorage.setItem("SuplierId",JSON.stringify(this.myId.supplierId));
      this.router.navigate(['/supplier-login/nav'])
      alert("Logged In Successfully");

    }, error => {
      alert("Failed to login");
    })
  };

}
