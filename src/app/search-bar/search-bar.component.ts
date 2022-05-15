import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }

  searchTerm: string = "";
  
  ngOnInit(): void {
  }

  searchMovies(event:string) {
    this._sharedService.emitChange(event);
  }

}
