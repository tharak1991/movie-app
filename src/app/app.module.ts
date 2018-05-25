import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoute } from './app.routes';
import { AboutComponent } from './modules/about/about.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { MovieComponent } from './modules/movie/movie.component';
import { MoviesService } from './services/movies.service';
import { CommonLayoutModule } from './common-layout/common-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AboutComponent,
    MovieComponent
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
    MatCardModule
  ],
  exports:[
    MatCardModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
