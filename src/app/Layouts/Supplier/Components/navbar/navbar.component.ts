import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../Services/Profile/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profile: any

  constructor(private profileService:ProfileService,
    private router:Router) { 

   }

  ngOnInit(): void { 
    this.fetchProfile()
  }
   fetchProfile(){
    this.profileService.getProfile(localStorage.getItem("SuplierId")).subscribe(response=>{
     this.profile=response
    });
  }

  logOut(){
    this.router.navigate(['/supplier-login'])
    localStorage.setItem("SuplierId",JSON.stringify(""));
  }



}


