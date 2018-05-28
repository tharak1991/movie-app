import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { MoviesSeachModel } from '../data-models/movie-search.model';
import { environment } from './../../environments/environment';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';


@Injectable()
export class MoviesService implements OnInit {

  private apiKey: string;
  private movieSearchResponse: MoviesSeachModel;
  private apiUrl: string;
  private handleError: HandleError;
  private search_api_url: string;

  constructor(private _httpClient: HttpClient, httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
    this.apiUrl = environment.api_url;
    this.apiKey = environment.apiKey;
    this.search_api_url = environment.search_api_url;
   }

  ngOnInit() {

   }

  public getSearchedMovies = (searchString: string): Observable<MoviesSeachModel[]> => {
    return this._httpClient.get<MoviesSeachModel[]>( this.apiUrl + 'apikey=' + this.apiKey + '&s=' + searchString)
    .pipe(
      catchError(this.handleError('getSearchedMovies', []))
    );
  }

  public getMovieByID = (imdbID: string): Observable<MoviesSeachModel[]> => {
    return this._httpClient.get<MoviesSeachModel[]>( this.apiUrl + 'apikey=' + this.apiKey + '&i=' + imdbID)
    .pipe(
      catchError(this.handleError('getSearchedMovies', []))
    );
  }

  public search_word = (term: string) => {
    return this._httpClient.get(this.apiUrl + 'apikey=' + this.apiKey + '&s=' + term).pipe(map(res => {
        return JSON.parse(res.toString()).map(item => {
            return item.word;
        });
    }));
  }
}


