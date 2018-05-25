import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { MoviesSeachModel } from '../data-models/movie-search.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class MoviesService {
  private apiKey: string;
  private movieSearchResponse: MoviesSeachModel;

  constructor(private _jsonp: Jsonp, private http:HttpClient) {
    this.apiKey = '42e7c341';
   }

   getPopular() {
     return this.http.get('')
      .pipe(map(res => res));
   }

   searchMovies(searchStr: string) {
     return this._jsonp.get('http://www.omdbapi.com/?apikey=' + this.apiKey + '&s=dark knight' )
     .pipe(map(res => res.json()));
   }

   getMovie(id: string) {
       return this._jsonp.get('' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apiKey)
       .pipe(map(res => res.json()));
   }

}
