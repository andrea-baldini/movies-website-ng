import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import MovieTest from '../models/MovieTest';
import { MovieService } from '../movie.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-full-movies-list',
  templateUrl: './full-movies-list.component.html',
  styleUrls: ['./full-movies-list.component.scss']
})
export class FullMoviesListComponent implements OnInit {

  searchThisFilm: string = "";
  movieSearched!: MovieTest[];


  constructor(private movieService: MovieService, private _sharedService: SharedService) {
    _sharedService.changeEmitted$.subscribe(text => {
      this.searchThisFilm = text;
      this.getSearchMovie(this.searchThisFilm)
    })
  }

  ngOnInit(): void {
  }

  getSearchMovie(searchInput: string) {
    this.movieService.getSearchMovies(searchInput).subscribe(r => {
      this.movieSearched = r.results;
    })
  }  

}
