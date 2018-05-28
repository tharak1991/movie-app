import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieModel } from '../../data-models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() private movie: MovieModel;
  private movieDetails: any;
  constructor(private router: ActivatedRoute, private _movieService: MoviesService) {  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const imdbID = params['i'];
      // this._movieService.getMovie(id).subscribe(movie => {
      //   this.movie = movie;
      // });
    });
  }

  private onMovieClick = (imdbID: string) => {
    alert(imdbID + 'imdbID');

  }

  private getMovieByID = (imdbID: string) => {
    this._movieService.getMovieByID(imdbID).
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

}
