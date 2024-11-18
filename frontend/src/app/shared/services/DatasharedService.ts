// src/app/template/shared-data.service.ts
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class DatasharedService {

  movieData!:any
  setData(data: any) {
    this.movieData=data;
  }
}