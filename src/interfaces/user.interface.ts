export interface IUserCreate {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}