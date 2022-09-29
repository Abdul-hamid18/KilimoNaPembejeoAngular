import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/Login/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent {
  hide = true;
  myAdminId:any
  adminId!:number

  adminLoginForm: FormGroup = new FormGroup({
    adminId: new FormControl(0),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    email: new FormControl("", [Validators.required, Validators.email])
    
  });

  constructor(private router:Router,
    private loginService:LoginService) { }

  ngOnInit(): void {
    
  }




  loggingIn() {
    this.loginService.AdminLogin(this.adminLoginForm.value).subscribe(response => {
      console.log(response);
      this.myAdminId=response
      localStorage.setItem("AdminId",JSON.stringify(this.myAdminId.adminId));
      this.router.navigate(['admin-login/admin-nav']);
      alert("Logged In Successfully");

    }, error => {
      alert("Failed to login");
    })
  };


}
