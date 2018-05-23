import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


export const appRoutes: Routes = [

  { path: '', redirectTo: 'movies/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'movies/home' },
  {
    path: 'movies/home', component: AppComponent,

  },
];

export const appRoute = RouterModule.forRoot(appRoutes);
