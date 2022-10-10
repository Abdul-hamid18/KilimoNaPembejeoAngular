import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../Services/Product/Products';
import { ProfileService } from '../../Services/Profile/profile.service';
import { Supplier } from '../../Services/Profile/Supplier';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
hide1=true
hide=true

profile: Supplier = new Supplier();

updateForm: FormGroup = new FormGroup({
  supplierId: new FormControl(localStorage.getItem("SuplierId")),
  oldPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
  supplierPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
  confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
});

  constructor(private profileService:ProfileService,
    private route:ActivatedRoute,
    private router:Router) { }

  
  ngOnInit(): void {
  }


    implementUpdate(){
      this.profileService.updatePassword(localStorage.getItem("SuplierId"), this.updateForm.value).subscribe( data =>{
      this.goToProfile()
        alert("Neno la siri limebadilishwa kikamilifu")
      },error=>{
        alert("Neno la Siri limeshindwa kubadilishwa")
      });
    }

    
   goToProfile(){
      this.router.navigate(['/supplier-login/nav/profile']);
    }

}
