import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/movie.list.component';
import { MovieDetailComponent } from './movie/movie-detail.component';
import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './notFound/notFound.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    LoginComponent,
    // HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'movies', component: MovieListComponent},
      {path: 'movie/:id', component: MovieDetailComponent},
      {path: 'login', component:LoginComponent},
      {path: 'home', component:MovieListComponent},
      {path: '', redirectTo:'home', pathMatch: 'full'},
      {path: '*', redirectTo:'home', pathMatch: 'full'},
      {path: '*', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   