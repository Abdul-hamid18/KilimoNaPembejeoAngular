import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../Services/Profile/profile.service';
import { Supplier } from '../../Services/Profile/Supplier';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  id!: number;
  profile: Supplier = new Supplier();
  hidepassword= true;
  hidepassword2= true;

  updateForm: FormGroup = new FormGroup({
    supplierRegNo: new FormControl("", [Validators.required]),
    supplierFName: new FormControl("", [Validators.required]),
    supplierLName: new FormControl("", [Validators.required]),
    supplierAddress: new FormControl("", [Validators.required]),
    supplierPhoneNo: new FormControl("", [Validators.required]),
    supplierEmail: new FormControl("", [Validators.required, Validators.email]),
    supplierPassword: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });


  constructor(private profileService:ProfileService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeUpdate();
  }

  initializeUpdate(){
    this.id = this.route.snapshot.params['id'];

    this.profileService.getProfile(this.id).subscribe(data => {
      this.profile = data;

      this.updateForm = new FormGroup({
        supplierRegNo: new FormControl(data.supplierRegNo, [Validators.required]),
        supplierFName: new FormControl(data.supplierFName, [Validators.required]),
        supplierLName: new FormControl(this.profile.supplierLName, [Validators.required]),
        supplierAddress: new FormControl(this.profile.supplierAddress, [Validators.required]),
        supplierPhoneNo: new FormControl(this.profile.supplierPhoneNo, [Validators.required]),
        supplierEmail: new FormControl(this.profile.supplierEmail, [Validators.required, Validators.email]),
        supplierPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)])
      });

    });
  }

    implementUpdate(){
      this.profileService.updateProfile(this.id, this.updateForm.value).subscribe( data =>{
      this.goToProfile()
        alert("Taarifa za wasifu wako zimesahihishwa kikamilifu")
      },error=>{
        alert("taarifa za wasifu wako zimeshindwa kusahihishwa")
      });
    }

    goToProfile(){
      this.router.navigate(['/supplier-login/nav/profile']);
    }

}
