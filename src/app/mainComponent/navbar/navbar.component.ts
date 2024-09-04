import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isAdmin:boolean=true;
  
private breakpointObserver=inject(BreakpointObserver);

 isSmallScreen: boolean = false; // Default value

  ngOnInit(): void {
    
    // Check for small screen breakpoints
     this.breakpointObserver.observe([
       Breakpoints.XSmall,
       Breakpoints.Small
     ]).subscribe(result => {
       this.isSmallScreen = result.matches;
     });
  }
}
