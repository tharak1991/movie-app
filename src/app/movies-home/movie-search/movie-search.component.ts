import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MoviesService } from './../../services/movies.service';
import { MoviesSeachModel } from '../../data-models/movie-search.model';


export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit  {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  autoSearchResults: any;
  private moviesResponse: MoviesSeachModel[];
  private isLoading: boolean ;
  private searchWord: string ;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor(private _movieService: MoviesService) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }
  ngOnInit() {
    this.isLoading = true;
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  private onSearchClick = (searchWord: string) => {
    this._movieService.getSearchedMovies(searchWord).
        subscribe(res => {
            this.moviesResponse = res;
            this.isLoading = false ;
            },
            err => console.error(err),
            () => {
            console.log('done loading movies') ;
        });
  }

  // getAutoCompleteResults = (searchKey: string) => {
  //   this._movieService.search_word(searchKey).
  //   subscribe(res => {
  //       this.autoSearchResults = res;
  //       },
  //       err => console.error(err),
  //       () => {
  //           console.log(this.autoSearchResults) ;

  //   });
  // }
}



