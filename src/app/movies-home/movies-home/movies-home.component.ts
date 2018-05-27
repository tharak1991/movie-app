import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { MoviesSeachModel } from '../../data-models/movie-search.model';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {

  @ViewChild(MovieSearchComponent) movieSearchComponent;
  @Input() searchResults: MoviesSeachModel[] ;
  private isSearchClicked: boolean;
  private movieSearchResults: MoviesSeachModel;

  constructor() { }

  ngOnInit() {
    this.isSearchClicked = false;

  }

  AfterViewInit() {
    this.isSearchClicked = this.movieSearchComponent.isSearchClicked ;
    console.log(this.movieSearchComponent.isSearchClicked);
    this.movieSearchResults = this.movieSearchComponent.moviesResponse;
  }

  receiveSearchResponse($eventSearchResponse) {
    this.movieSearchResults = $eventSearchResponse;
    console.log( this.movieSearchResults);
    this.isSearchClicked = true ;
  }

}
