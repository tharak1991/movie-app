import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';

import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';


@Injectable()
export class MoviesService {
  apiKey: string;

  constructor(private _jsonp: Jsonp) {
    this.apiKey = '';
   }

   getPopular() {
     return this._jsonp.get('')
      .pipe(map(res => res.json()));
   }

   searchMovies(searchStr: string) {
     return this._jsonp.get('http://www.omdbapi.com/?apikey=' + this.apiKey + '&s=' + searchStr)
     .pipe(map(res => res.json()));
   }

   getMovie(id: string) {
       return this._jsonp.get('' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apiKey)
       .pipe(map(res => res.json()));
   }

}
