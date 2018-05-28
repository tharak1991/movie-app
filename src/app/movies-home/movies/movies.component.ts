import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

import { MoviesSeachModel } from '../../data-models/movie-search.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {

    @Input() private moviesResponse: MoviesSeachModel[];
    private searchStr: string;
    private isLoading: boolean ;


    constructor(private _movieService: MoviesService) {
        // this._movieService.getPopular().subscribe(res => {
        //     this.popularList = res.results;
        // });
    }

    ngOnInit() {
        this.isLoading = true ;
    }
}

