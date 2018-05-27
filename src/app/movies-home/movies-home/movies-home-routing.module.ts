import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './../about/about.component';
import { MovieComponent } from './../movie/movie.component';
import { MoviesComponent } from './../movies/movies.component';
import { MovieSearchComponent } from './../movie-search/movie-search.component';


export const moviesRoutes: Routes = [

  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '**', redirectTo: 'search' },
  { path: 'search', component: MovieSearchComponent},
  { path: 'about', component: AboutComponent },
  { path: 'movie/:id', component: MovieComponent }
];

export const movieRoot = RouterModule.forRoot(moviesRoutes);
