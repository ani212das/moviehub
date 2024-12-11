import { CommonModel } from './common.model';

export interface RolesModel {
  id: number;
  name: string;
  displayName: string;
  normalizedName: string;
  description: string
}
export interface getRoleForEditOutputModel extends CommonModel{
  result:{
    role: RolesModel
  }
}
export interface GetAllRolesOutputModel extends CommonModel {
  result: {
    totalCount: number;
    items: RolesModel[];
  };
}
export interface CreateRoleInputModel extends RolesModel {}
export interface CreateRoleOutputModel extends CommonModel {
  result: RolesModel;
}
export interface GetallRolesInputParamsModel extends CommonModel {
  Keyword: string;
  SkipCount: number;
  MaxResultCount: number;
}
