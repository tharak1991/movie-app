import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MoviesService } from './../../services/movies.service';
import { MoviesSeachModel } from '../../data-models/movie-search.model';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movieSearchCtrl: FormControl;
  filteredMovies: Observable<any[]>;
  autoSearchResults: any;
  private moviesResponse: MoviesSeachModel[];
  private isLoading: boolean;
  private searchWord: string;
  private isSearchClicked: boolean;

  @Output() searchResponseEvent = new EventEmitter<MoviesSeachModel[]>();

  constructor(private _movieService: MoviesService) {
    this.movieSearchCtrl = new FormControl();
    // this.filteredMovies = this.movieSearchCtrl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(state => state ? this.filterStates(state) : this.states.slice())
    //   );
  }
  ngOnInit() {
    this.isLoading = true;
    this.isSearchClicked = false;
  }

  // filterStates(name: string) {
  //   return this.states.filter(state =>
  //     state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  // }

  private onSearchClick = (searchWord: string) => {
    this.isSearchClicked = true;
    this.searchMovies(searchWord);
  }

  private searchMovies = (searchString: string) => {
    this._movieService.getSearchedMovies(searchString).
      subscribe(res => {
        this.moviesResponse = res;
      },
        err => console.error(err),
        () => {
          console.log('done loading movies');
          this.isLoading = false;
          this.searchResponseEvent.emit(this.moviesResponse );
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



