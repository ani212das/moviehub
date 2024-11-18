import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ReviewComponent } from './review/review.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieFormComponent,
    ReviewComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    FormsModule,
    TabMenuModule,
    CalendarModule,
    MenubarModule,
    CardModule

    
  ],
  exports: [
    MovieListComponent,
    MovieDetailComponent,
    MovieFormComponent,
    ReviewComponent

  ]
})
export class MoviesModule { }
