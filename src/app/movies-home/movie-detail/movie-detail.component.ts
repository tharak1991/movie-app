import { Component, OnInit, Input } from '@angular/core';
import {MatIconRegistry, MatButton} from '@angular/material';
import { MovieDetailModel } from '../../data-models/movie-detail.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() private iconColor: string ;
  private movie: MovieDetailModel[] ;
  private isLoading: boolean;
  private imdbID: string ;
  private likeIconSrc = './../../../assets/img/like.svg' ;
  private unLikeIconSrc = './../../../assets/img/unlike.svg';
  private svgIcon: string ;
  private storedKeys: string[];

  constructor(private router: ActivatedRoute,
    private _movieService: MoviesService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('./../../../assets/img/like.svg'));
        iconRegistry.addSvgIcon(
          'thumbs-down',
          sanitizer.bypassSecurityTrustResourceUrl('./../../../assets/img/unlike.svg'));
  }


  ngOnInit() {
    this.isLoading = true;
    this.storedKeys = this._movieService.getAllKeys();
    this.iconColor = 'warn';
    this.svgIcon = this.likeIconSrc;
    this.router.params.subscribe((params) => {
      this.imdbID = params['id'];
      this.iconColor = this.storedKeys.includes(this.imdbID) ? 'primary' : 'warn' ;
      this._movieService.getMovieByID(this.imdbID).
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

private onLikebtnClick = (imdbID: string) => {
  // tslint:disable-next-line:no-debugger
  debugger;
  if (this.iconColor === 'warn') {
     this._movieService.saveInLocal(imdbID, imdbID);
  } else {
    this._movieService.removeFromLocal(imdbID);
  }
  this.toggleColor(this.iconColor);
}

private toggleColor = (iconColor: string) => {
this.iconColor = iconColor === 'warn' ? 'primary' : 'warn' ;
}

}
