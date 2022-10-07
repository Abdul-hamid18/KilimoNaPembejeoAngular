import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../Services/Profile/profile.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  showFiller=false;
  profile:any;
  constructor(private profileService: ProfileService,private router:Router) { }

  ngOnInit(): void {
    this.fetchProfile()
  }

  fetchProfile(){
    this.profileService.getProfile(localStorage.getItem("AdminId")).subscribe(response=>{
     this.profile=response
    });
  }


  logOut(){
    this.router.navigate(['/admin-login'])
    localStorage.setItem("AdminId",JSON.stringify(""));
  }



}
