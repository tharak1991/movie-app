import { Component, OnInit, Input, Inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieModel } from '../../data-models/movie.model';
import { MovieDetailModel } from '../../data-models/movie-detail.model';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

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
  private data: string[];

  constructor(private activatedRoute: ActivatedRoute,
  private _movieService: MoviesService, private router: Router,
  @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) {

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

  private onLikebtnClick = (imdbID: string) => {
      alert(imdbID);

  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
  }

  getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key] = this.storage.get(key);
    console.log(this.data);
   }

}
