import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-website-ng';

  searchValue: string = "";

  searchInput(event: string) {
  console.log(event)
  this.searchValue = event;
  }

}
