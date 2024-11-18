import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private apiurl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  detailpost() {
    return this.http.get(this.apiurl);
  }

  // movie.service.ts
getMovieById(id: string): Observable<any> {
  return this.http.get(`${this.apiurl}/${id}`);
}

}
