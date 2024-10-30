import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieComponent } from './template/movie/movie.component';
import { MovieDetailsComponent } from './template/movie/movieDetails/movie-details/movie-details.component';
import { MovieListComponent } from './template/movie/movie-list/movie-list.component';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [AppComponent, MovieComponent, MovieDetailsComponent, MovieListComponent],
  imports: [
    SharedModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
