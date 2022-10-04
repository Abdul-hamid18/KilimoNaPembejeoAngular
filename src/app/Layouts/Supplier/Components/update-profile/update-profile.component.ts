import { Component, OnInit } from '@angular/core';
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

  constructor(private profileService:ProfileService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeUpdate();
  }

  initializeUpdate(){
    this.id = this.route.snapshot.params['id'];

    this.profileService.getProfile(this.id).subscribe(data => {
      this.profile = data;
      
    });
  }

    implementUpdate(){
      this.profileService.updateProfile(this.id, this.profile).subscribe( data =>{
      this.goToProfile()
        alert("Profile Updated Successfully")
      },error=>{
        alert("Failed to update Profile")
      });
    }

    goToProfile(){
      this.router.navigate(['/supplier-login/nav/profile']);
    }

}
