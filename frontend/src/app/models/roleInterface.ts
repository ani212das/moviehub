import { CommonModel } from './common.model';

export interface adminRequest {
  name: string;
  displayName: string;
  normalizedName: string;
  description: string;
  grantedPermissions: string[];
}

export interface adminResponse extends CommonModel{
  id: number,
  name: string,
  displayName: string,
  normalizedName: string,
  description: string,
  grantedPermissions: string[],
}
export interface getalldetails extends CommonModel{
    result: {
      totalCount: string,
      items: adminResponse[]
    },
}
export interface adminDetais extends CommonModel {
  result: adminResponse;
}