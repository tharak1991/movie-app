import { Component, OnInit } from '@angular/core';
import { MovieDetailModel } from '../../data-models/movie-detail.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  private movie: MovieDetailModel[] ;
  private isLoading: boolean;

  constructor(private router: ActivatedRoute,
  private _movieService: MoviesService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._movieService.getMovieByID(id).
        subscribe(res => {
          this.movie = res;
        },
          err => console.error(err),
          () => {
            console.log('done loading movie details');
            this.isLoading = false;
          });
  });
}

}
