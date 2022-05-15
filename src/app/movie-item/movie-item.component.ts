import { Component, Input, OnInit } from '@angular/core';
import { ListMovies, Movie } from '../models/Movie';
import SingleMovieTest from '../models/MovieTest';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input()
  movieItem!: SingleMovieTest;

  constructor() {
  }

  ngOnInit(): any {
   
  }

  openMovieDetail(movieId:number) {
    console.log(movieId)
  }

  
}



