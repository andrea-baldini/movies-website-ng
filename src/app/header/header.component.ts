import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  animations: [
    trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('300ms', style({ opacity: 0 }))
    ])
  ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
  
export class HeaderComponent implements OnInit {

  isSearchVisible: boolean = false;
  searchInputValue: string = "";

  getScreenWidth: any;
  getScreenHeight: any;
  

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }


  @Output()
  changeSearch = new EventEmitter<string>()

  openSearchBar() {
    console.log("clicca")
    this.isSearchVisible = !this.isSearchVisible
  }

  searchInput(event: string) {
    // console.log(event)
    // this.searchInputValue = event;
    this.changeSearch.emit(event)
    console.log(event)
  }


}
