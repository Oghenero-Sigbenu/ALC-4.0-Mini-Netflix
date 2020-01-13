import { Component, OnInit } from '@angular/core';
import {MovieService} from "./movie.service";
import {IMovie} from "./movie";

@Component({
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieListComponent implements OnInit {
  pageTitle : string ="Movie Home";
  errorMessage: string;
  
  _listFilter : string;
  get listFilter(): string {
    return this._listFilter;
  };

  set listFilter(value: string) {
    this._listFilter= value;
    this.filteredMovies= this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }
  
  movies: any[];
  filteredMovies: any[];

  //dependency injection
  constructor(private movieService: MovieService) { 

  };

  performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) => 
    movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1)
  };

  ngOnInit( ) {
    console.log("yes i am")
    this.movies = this.movieService.getMovies()
    // this.movieService.getMovies().subscribe({
    //   next: movies => {
    //     this.movies = movies;
    //     this.filteredMovies = this.movies;
    //   },
    //   error: err => this.errorMessage = err
    // });
  }
}
