import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // myScriptElement!: HTMLScriptElement

  constructor() { 
    // this.myScriptElement=document.createElement("script");
    // this.myScriptElement.src="assets/js/scripts.js";
    // document.body.appendChild(this.myScriptElement);
   }

  ngOnInit(): void { 
  
   }



}


