import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import {MatButtonModule, MatProgressSpinnerModule,
MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { appRoute } from './app.routes';
import { AboutComponent } from './modules/about/about.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { MovieComponent } from './modules/movie/movie.component';
import { MoviesService } from './services/movies.service';
import { CommonLayoutModule } from './common-layout/common-layout.module';
import { MovieSearchComponent } from './modules/movie-search/movie-search.component';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AboutComponent,
    MovieComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonpModule,
    FormsModule,
    RouterModule,
    appRoute,
    Ng2SearchPipeModule,
    CommonLayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule

  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule

  ],
  providers: [MoviesService,
  HttpErrorHandler,
  MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
