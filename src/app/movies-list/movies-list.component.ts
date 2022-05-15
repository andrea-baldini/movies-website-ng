import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ListMovies, Movie } from '../models/Movie';
import { MovieService } from '../movie.service';
import { NgxSpinnerService } from "ngx-spinner";
import MovieTest from '../models/MovieTest';
import { SharedService } from '../shared.service';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies!: MovieTest[]; 
  movieBox!: MovieTest[];
  movieComing!: MovieTest[];

  isSearch: boolean = false;

  getSliceFilm: number = 10;
  lenghtArrayMovies!: number;
  // searchThisFilm: string = "";

  getScreenWidth: any;
  getScreenHeight: any;
  
  constructor(private movieService: MovieService, private spinner: NgxSpinnerService, private _sharedService: SharedService, private router: Router) {
    _sharedService.changeEmitted$.subscribe(text => {
      if (text != "") {
        // this.isSearch = true
        this.router.navigate(["search"]);
      }
      // else {
      //   this.router.navigate(["home"]);
      // }
      // console.log(text)
      // this.showMovies('');
    });
  }

  ngOnInit(): void {
    this.getMoviesList(this.getSliceFilm);
    this.getBoxOffice(this.getSliceFilm);
    this.getComingSoon(this.getSliceFilm)

    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  // --- Get Movie list ---

  getMoviesList(numberFilm : number):void{
    this.movieService.getMostViewList().subscribe(r => { 
      this.lenghtArrayMovies = r.results.length,
        this.movies = r.results.slice(0, numberFilm)
        // this.loadCompleted = true;
    })
  }

  getBoxOffice(numberFilm: number): void {
    this.movieService.getBoxOfficeList().subscribe(r => {
      this.lenghtArrayMovies = r.results.length;
      this.movieBox = r.results.slice(0, numberFilm);
    })
  }

  getComingSoon(numberFilm: number): void {
    this.movieService.getComingSoon().subscribe(r => {
      this.lenghtArrayMovies = r.results.length;
      this.movieComing = r.results.slice(0, numberFilm);
    })
  }

  // END GET

  showMovies(string: string) {
    if (string == "most-popular") {
      this.getSliceFilm += 5;
      this.getMoviesList(this.getSliceFilm);
    } else if (string == "box-office") {
      this.getSliceFilm += 5;
      this.getBoxOffice(this.getSliceFilm)
    } else if (string == "coming-soon") {
      this.getSliceFilm += 5;
      this.getComingSoon(this.getSliceFilm)
    }
  }
  
  onScroll(string:string):void {
    this.showMovies(string);
  }
  
}
