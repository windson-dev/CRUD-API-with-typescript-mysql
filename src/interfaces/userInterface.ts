export interface UserCredentials {
  username: string;
  password: string;
}

export interface User {
  id?: number;
  username: string;
  password: string;
  vocation: string;
  level: number;
}