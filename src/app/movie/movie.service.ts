import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import {tap,catchError, map} from 'rxjs/operators';

import {IMovie} from "./movie"

@Injectable({
    providedIn: 'root'
})


export class MovieService {
    private movieUrl = "assets/movies/movies.json";

    //create a constructior
    constructor(private http: HttpClient){}

    getMovies():Observable<IMovie[]> {
        return this.http.get<IMovie[]>(this.movieUrl).pipe(
            tap(data => console.log("All" + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    getMovie(id: number): Observable<IMovie | undefined> {
        return this.getMovies()
          .pipe(
            map((movies: IMovie[]) => movies.find(movie => movie.objectId === id))
          );
      }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage=`An error occured: ${err.error.message}`;
        }
        else{
            // errorMessage=`Server returned code: ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}