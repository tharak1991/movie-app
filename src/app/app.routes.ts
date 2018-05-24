import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './modules/about/about.component';
import { MovieComponent } from './modules/movie/movie.component';
import { MoviesComponent } from './modules/movies/movies.component';


export const appRoutes: Routes = [

  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', redirectTo: 'movies' },
  { path: 'movies', component: MoviesComponent},
  { path: 'about', component: AboutComponent },
  { path: 'movie/:id', component: MovieComponent }
];

export const appRoute = RouterModule.forRoot(appRoutes);
