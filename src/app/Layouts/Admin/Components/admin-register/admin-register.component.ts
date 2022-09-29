import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  hide = true;
  adminRegisterForm: FormGroup = new FormGroup({
    adminFName: new FormControl("", [Validators.required]),
    adminLName: new FormControl("", [Validators.required]),
    adminEmail: new FormControl("", [Validators.required, Validators.email]),
    adminPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)])

  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Register() {
    this.router.navigate(['admin-login']);
  }

}
