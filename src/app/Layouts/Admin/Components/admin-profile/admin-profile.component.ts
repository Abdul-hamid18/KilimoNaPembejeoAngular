import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/Profile/profile.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  profile:any;
  
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.fetchProfile()
  }

  fetchProfile(){
    this.profileService.getProfile(localStorage.getItem("AdminId")).subscribe(response=>{
     this.profile=response
      console.log(response)
    });
  }

}
