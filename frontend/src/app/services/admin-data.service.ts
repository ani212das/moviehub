import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModel } from '../models/common.model';
import { adminDetais, adminRequest,  adminResponse, getalldetails } from '../models/roleInterface';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  private baseurl = environment.serverUrl;

  constructor(private http: HttpClient) { }

  createuser(adminData: adminRequest): Observable<adminResponse>{
    return this.http.post<adminResponse>(`${this.baseurl}services/app/Role/Create`, adminData)
  }

  GetAllUser(): Observable<getalldetails>{
    return this.http.get<getalldetails>(`${this.baseurl}services/app/Role/GetAll`)
  }

  getUserById(id: number): Observable<adminDetais> {
    return this.http.get<adminDetais>(`${this.baseurl}services/app/Role/Get?Id=${id}`);
  }
}

