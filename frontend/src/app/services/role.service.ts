import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonModel } from '../models/common.model';
import { GetallRolesInputParamsModel, GetAllRolesOutputModel, getRoleForEditOutputModel, CreateRoleInputModel, CreateRoleOutputModel } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseurl = environment.serverUrl;
  constructor(
    private httpClient: HttpClient
  ) {}

  getallRoles(input: GetallRolesInputParamsModel) {
    let params = new HttpParams();
    if (input.Keyword) {
      params = params.set('Keyword', input.Keyword);
    }
    if (input.MaxResultCount) {
      params = params.set('MaxResultCount', input.MaxResultCount);
    }
    if (input.SkipCount) {
      params = params.set('SkipCount', input.SkipCount);
    }
    const requestOptions = { params: params };
    return this.httpClient.get<GetAllRolesOutputModel>(
      `${this.baseurl}services/app/Role/GetAll`,
      requestOptions
    );
  }
  getRoleForEdit(id: number){
    let params = new HttpParams().set('id', id);
    const requestOptions = { params: params };
    return this.httpClient.get<getRoleForEditOutputModel>(
      `${this.baseurl}services/app/Role/GetRoleForEdit`,
      requestOptions
    );
  }
  createRole(input: CreateRoleInputModel) {
    return this.httpClient.post<CreateRoleOutputModel>(
      `${this.baseurl}services/app/Role/Create`,
      input
    );
  }
  updateRole(input: CreateRoleInputModel) {
    return this.httpClient.put<CreateRoleOutputModel>(
      `${this.baseurl}services/app/Role/Update`,
      input
    );
  }
  getRoleById(id: number) {
    let params = new HttpParams().set('id', id);
    const requestOptions = { params: params };
    return this.httpClient.get<CreateRoleOutputModel>(
      `${this.baseurl}services/app/Role/Get`,
      requestOptions
    );
  }
  deleteRoleByid(id: number) {
    let params = new HttpParams().set('id', id);
    const requestOptions = { params: params };
    return this.httpClient.delete<CommonModel>(
      `${this.baseurl}services/app/Role/Delete`,
      requestOptions
    );
  }
}

