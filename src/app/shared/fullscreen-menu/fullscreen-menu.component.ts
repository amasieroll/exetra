import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fullscreen-menu',
  templateUrl: './fullscreen-menu.component.html',
  styleUrls: ['./fullscreen-menu.component.css']
})
export class FullscreenMenuComponent implements OnInit {
  @Output() hideMenuEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(){
    this.hideMenuEvent.emit(false);
  }


}
