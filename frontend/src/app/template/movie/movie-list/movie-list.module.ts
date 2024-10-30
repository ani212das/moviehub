import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [
    MovieCardComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule
  ]
})
export class MovieListModule { }
