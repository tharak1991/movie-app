import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoute } from './app.routes';
import { AboutComponent } from './modules/about/about.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { MovieComponent } from './modules/movie/movie.component';
import { MoviesService } from './services/movies.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AboutComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule,
    appRoute],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
