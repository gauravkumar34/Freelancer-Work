import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  public List:string[] = ['Secondary Sales Tracking', 'Database','Solutions for Government Sector','Healthcare-Aarogya','Construction Real Estate'];
  public display:string='';
  constructor() { }

  ngOnInit(): void {
    this.List.forEach(element => {
      this.display = element;
    });
  }
  



}
