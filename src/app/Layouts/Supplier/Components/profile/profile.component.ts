import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from '../../Services/Profile/profile.service';
import { Supplier } from '../../Services/Profile/Supplier';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id!: number;
  profile: Supplier = new Supplier();
  hide1=true
  hide=true
  hidepassword= true;
  hidepassword2= true;

  updateForm: FormGroup = new FormGroup({
    supplierId:new FormControl(0,[Validators.required]),
    supplierRegNo: new FormControl("", [Validators.required]),
    supplierFName: new FormControl("", [Validators.required]),
    supplierLName: new FormControl("", [Validators.required]),
    supplierAddress: new FormControl("", [Validators.required]),
    supplierPhoneNo: new FormControl("", [Validators.required]),
    supplierEmail: new FormControl("", [Validators.required, Validators.email]),
  });

  passFormGroup: FormGroup = new FormGroup({
    supplierId:new FormControl(0,[Validators.required]),
    oldPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    supplierPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });

  

  constructor(private profileService:ProfileService,
    private router:Router, config: NgbModalConfig, private modalService: NgbModal) { 
          // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    }

  ngOnInit(): void {
    this.fetchProfile();
  }


  fetchProfile(){
    this.profileService.getProfile(localStorage.getItem("SuplierId")).subscribe(response=>{
     this.profile=response
    });
  }


openToEdit(editForm: any) {
  this.modalService.open(editForm,{ size: 'lg' })
}

openToEditPass(passForm: any) {
  this.modalService.open(passForm)
}

editProfile(profile:Supplier){
  this.updateForm=new FormGroup({
    supplierId:new FormControl(profile.supplierId,[Validators.required]),
    supplierRegNo: new FormControl(profile.supplierRegNo, [Validators.required]),
    supplierFName: new FormControl(profile.supplierFName, [Validators.required]),
    supplierLName: new FormControl(profile.supplierLName, [Validators.required]),
    supplierAddress: new FormControl(profile.supplierAddress, [Validators.required]),
    supplierPhoneNo: new FormControl(profile.supplierPhoneNo, [Validators.required]),
    supplierEmail: new FormControl(profile.supplierEmail, [Validators.required, Validators.email]),
  });
}

updateProfile(){
  this.profileService.updateProfile(this.updateForm.controls["supplierId"].value,this.updateForm.value).subscribe(response=>{
    this.fetchProfile();
    alert("Taarifa za wasifu wako zimesahihishwa kikamilifu")
  },error=>{
    alert("taarifa za wasifu wako zimeshindwa kusahihishwa")
  });
}

editPassword(profile:Supplier){
  this.passFormGroup=new FormGroup({
    supplierId: new FormControl(localStorage.getItem("SuplierId")),
    oldPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    supplierPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    
  });
}

updatePassword(){
  this.profileService.updatePassword(this.passFormGroup.controls["supplierId"].value,this.passFormGroup.value).subscribe(response=>{
    this.fetchProfile();
    alert("Taarifa za wasifu wako zimesahihishwa kikamilifu")
  },error=>{
    alert("taarifa za wasifu wako zimeshindwa kusahihishwa")
  });
}

}
