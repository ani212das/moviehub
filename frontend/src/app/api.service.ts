// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }


// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { CreateUserRequest, User } from './models/user.model';
import { CommonModel } from './models/common.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl = environment.serverUrl; 
  // services/app/
  constructor(private http: HttpClient) { }
  

  getData(endpoint: string): Observable<{ totalCount: number; items: User[] }> {
    
    return this.http.get<{ result: { totalCount: number; items: User[] } }>(`${this.baseUrl}/${endpoint}`)
    .pipe(
      map((response) => response.result), // Extract `result` here
      // catchError(this.handleError)
    );
  }

  getDataById(endpoint: string, id: number): Observable<User> {
    return this.http.get<{ result: User }>(`${this.baseUrl}/${endpoint}?Id=${id}`).pipe(
      map((response) => response.result) // Extract the result property
    );
  }
  
  deleteUserById(endpoint:string,id:number):Observable<CommonModel>{
    return this.http.delete<CommonModel>(`${this.baseUrl}/${endpoint}?Id=${id}`);
  }
  

  postData(endpoint: string, payload: CreateUserRequest): Observable<CreateUserRequest> {
    return this.http.post<CreateUserRequest>(`${this.baseUrl}/${endpoint}`, payload);
  }

  updateUser(endpoint: string, payload: User): Observable<User> {
    console.log(payload,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    return this.http.put<User>(`${this.baseUrl}/${endpoint}`, payload);
  }
}
