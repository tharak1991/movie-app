import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './modules/about/about.component';
import { MovieComponent } from './modules/movie/movie.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { MovieSearchComponent } from './modules/movie-search/movie-search.component';


export const appRoutes: Routes = [

  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', redirectTo: 'movies' },
  { path: 'movies', component: MoviesComponent, children: [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: '**', redirectTo: 'search' },
    { path: 'search', component: MovieSearchComponent },
  ]},
  { path: 'about', component: AboutComponent },
  { path: 'movie/:id', component: MovieComponent }
];

export const appRoute = RouterModule.forRoot(appRoutes);
