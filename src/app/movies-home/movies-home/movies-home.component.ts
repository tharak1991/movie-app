import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from '../movie-search/movie-search.component';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {

  @ViewChild(MovieSearchComponent) movieSearchComponent;
  private isSearchClicked: boolean;

  constructor() { }

  ngOnInit() {
    this.isSearchClicked = false;
  }

  AfterViewInit() {
    this.isSearchClicked = this.movieSearchComponent.isSearchClicked ;
  }

}
