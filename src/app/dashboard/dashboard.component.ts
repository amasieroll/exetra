import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName = 'Nome Cognome';
  rightMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.rightMenu = true;
  }

  showDashboard(event: any){
    console.log(event)
    this.rightMenu = event;
  }
}
