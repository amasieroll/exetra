import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  cards: any = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {img: "../../../../assets/icons/dashboard.svg", label: 'Dashboard', selected: true},
      {img: "../../../../assets/icons/dossier.svg", label: 'Dossier', selected: false},
      {img: "../../../../assets/icons/db.svg", label: 'Database CRM', selected: false},
      {img: "../../../../assets/icons/db_in.svg", label: 'DB import', selected: false},
      {img: "../../../../assets/icons/db_out.svg", label: 'DB export', selected: false}
     
      
    ]
  }

  selectCard(card: any){
   console.log(card);
   this.cards.forEach((element: { selected: boolean; }) => {
     element.selected = false;
   });
   card.selected = true;
  }

}
