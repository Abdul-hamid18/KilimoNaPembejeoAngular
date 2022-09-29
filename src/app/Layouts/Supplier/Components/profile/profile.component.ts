import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/Profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;

  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.fetchProfile();
  }


  fetchProfile(){
    this.profileService.getProfile(localStorage.getItem("SuplierId")).subscribe(response=>{
     this.profile=response
      console.log(response)
    });
  }

}
