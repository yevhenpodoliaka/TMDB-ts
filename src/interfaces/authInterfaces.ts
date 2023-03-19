import {ISavedMovie} from "./authContextInterfaces"
export interface IRequestToRegister {
  name: string;
  email: string;
  password: string;
}

export interface IRequestToLogin {
  email: string;
  password: string;
}

export interface IAuthResponse {
  name: string;
  token: string;
  movies: ISavedMovie[];
}

export interface IResponseCurrentUser {
  user: { name: string; email: string; movies: ISavedMovie[] };
}
