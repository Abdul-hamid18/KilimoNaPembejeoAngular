import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmersService } from '../../Services/FarmersServices/farmers.service';

@Component({
  selector: 'app-register-farmer',
  templateUrl: './register-farmer.component.html',
  styleUrls: ['./register-farmer.component.css']
})

export class RegisterFarmerComponent implements OnInit {
  hide = true;
  farmerForm: FormGroup = new FormGroup({
    farmerRegNo: new FormControl("", [Validators.required]),
    farmerFName: new FormControl("", [Validators.required]),
    farmerLName: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    farmerAddress: new FormControl("", [Validators.required]),
    farmerPhoneNo: new FormControl("", [Validators.required]),
    farmerEmail: new FormControl("", [Validators.required, Validators.email]),
    farmerPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl("",[Validators.required, Validators.minLength(8)])
  });


  constructor(private farmersSerice: FarmersService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNewFarmer() {
    this.farmersSerice.newFarmer(this.farmerForm.value).subscribe(response => {
      this.router.navigate(['/admin-login/admin-nav/farmers-list'])
      .then(() => {
        window.location.reload();
      });
      alert("Mkulima amesajiliwa kikamilifu");

    }, error => {
      alert("Mkulima Ameshindwa kusajiliwa");
    })
  };




}
