import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { ProfileService } from '../../Services/Profile/profile.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  showFiller=false;
  profile:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private profileService: ProfileService,private router:Router,
    private breakpointObserver: BreakpointObserver) { }

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
