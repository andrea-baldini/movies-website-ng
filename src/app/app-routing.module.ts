import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullMoviesListComponent } from './full-movies-list/full-movies-list.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: MoviesListComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'search', component: FullMoviesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
