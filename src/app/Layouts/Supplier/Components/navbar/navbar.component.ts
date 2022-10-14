import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { ProfileService } from '../../Services/Profile/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profile: any

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  constructor(private profileService:ProfileService,
    private router:Router, private breakpointObserver: BreakpointObserver) { 

   }

  ngOnInit(): void { 
  }
   

  logOut(){
    this.router.navigate(['/supplier-login'])
    localStorage.setItem("SuplierId",JSON.stringify(null));
  }



}


