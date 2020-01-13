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
  movie:any;
  productService: any;
  MovieService: any;
  errorMessage: string;
  param: any;
  getMovie: any;
  id;
  ActivatedRoute: any;
 
  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    // let param = this.movieService.getMovie(+this.route.snapshot.params['1']);
    let id =  this.route.snapshot.params['id'];
     this.movie =this.movieService.getMovie(id);
      //  this.movies = movies.map(m => m.id === this.id);
    // let param = this.route.snapshot.paramMap.get('objectId');
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
