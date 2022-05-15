import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListMovies, Movie } from './models/Movie';
import MovieTest from './models/MovieTest';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  // getMovie(): Observable<ListMovies>{
	//     return this.http.get<ListMovies>(environment.API_URL + "MostPopularMovies/" + environment.API_KEY); 
  // }

  getMostViewList(): Observable<MovieTest>{
	  return this.http.get<MovieTest>("https://api.themoviedb.org/3/movie/top_rated?api_key=5ccc652f075856128b903fc8c31128e8&language=en-US&page=1"); 
  }

  getBoxOfficeList(): Observable<MovieTest> {
    return this.http.get<MovieTest>("https://api.themoviedb.org/3/movie/now_playing?api_key=5ccc652f075856128b903fc8c31128e8&language=en-US&page=1");
  }

  getComingSoon(): Observable<MovieTest> {
    return this.http.get<MovieTest>("https://api.themoviedb.org/3/movie/upcoming?api_key=5ccc652f075856128b903fc8c31128e8&language=en-US&page=1");
  }

  getSearchMovies(movieSearch:string): Observable<MovieTest> {
    return this.http.get<MovieTest>(`https://api.themoviedb.org/3/search/movie?api_key=5ccc652f075856128b903fc8c31128e8&language=en-US&page=1&include_adult=false?&query=${movieSearch}`);
  }


}
