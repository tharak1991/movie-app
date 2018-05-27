import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesHomeComponent } from './movies-home/movies-home/movies-home.component';


export const appRoutes: Routes = [

  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', redirectTo: 'movies' },
  { path: 'movies', component: AppComponent},
  // { path: 'about', component: AboutComponent },
  // { path: 'movie/:id', component: MovieComponent }
];

export const appRoute = RouterModule.forRoot(appRoutes);
