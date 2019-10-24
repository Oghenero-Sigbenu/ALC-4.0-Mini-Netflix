import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import {ActivatedRoute} from "@angular/router";
import { MovieService } from './movie.service';

@Component({
    templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {
  pageTitle: string = 'Movie Detail';
  movies: IMovie;
  productService: any;
  MovieService: any;
  errorMessage: string;
  
  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    let param = +this.route.snapshot.paramMap.get('objectId');
    // if (param) {
    //   const id = +param;
    //   this.getMovie(id);
    // }
    
  };
  
  // getMovie() {
  // this.movieService.getMovie(id).subscribe({
  //   next: movies => this.movies = movies,
  //   error: err => this.errorMessage = err
  // });
  // }
  
}
