import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  siteActivity = {
    newRegistrations: 120,
    upcomingClasses: 15
  };

  // Sample key metrics data
  keyMetrics = {
    totalRegistrations: 2500,
    totalClasses: 150
  };

  constructor() {
    // Initialize any additional data or services if needed
  }

  // Example method for future use
  // fetchSiteData() {
  //   // Fetch data from service
  // }
}
