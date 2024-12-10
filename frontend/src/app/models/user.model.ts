export interface User {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  fullName: string;
  lastLoginTime: string | null;
  creationTime: string;
  roleNames: string[];
  id: number;
}

export interface Data {
  totalCount: number;
  items: User[];
}

export interface CreateUserRequest {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  roleNames: string[]; // Admin roles
  password: string;
}

export interface UpdateUserRequest {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  fullName: string;
  lastLoginTime: string | null;
  creationTime: string;
  roleNames: string[];
  id: number;
}