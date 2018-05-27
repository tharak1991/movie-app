import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const appRoutes: Routes = [

  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', redirectTo: 'movies' },
  { path: 'movies', component: AppComponent }
];

export const appRoute = RouterModule.forRoot(appRoutes);
