import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieModel } from '../../data-models/movie.model';
import { MovieDetailModel } from '../../data-models/movie-detail.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() private movie: MovieModel;
  private movieDetails: MovieDetailModel[];
  private isLoading: boolean;
  private imdbID: string ;

  constructor(private activatedRoute: ActivatedRoute,
  private _movieService: MoviesService, private router: Router) {

  }

  ngOnInit() {
    this.imdbID = this.movie.imdbID ;
    // this.activatedRoute.params.subscribe((params) => {
    //   this.imdbID =  params['i'];
    //   this.isLoading = true ;
    //   // this._movieService.getMovie(id).subscribe(movie => {
    //   //   this.movie = movie;
    //   // });
    // });
  }

  private onMovieClick = () => {
    alert(this.imdbID + 'imdbID');
    this.getMovieByID(this.imdbID);
    this.router.navigate(['movies/' + this.imdbID]);
  }

  private getMovieByID = (imdbID: string) => {
    this._movieService.getMovieByID(imdbID).
      subscribe(res => {
        this.movieDetails = res;
      },
        err => console.error(err),
        () => {
          console.log('done loading movie details');
          this.isLoading = false;
        });
  }

}
