export interface ISavedMovie{
  movieId: string,
  groupe: "favorites" | "watched" | "queued"
  _id:string
}

export interface IUserContext {
  isLoggedIn: boolean;
  userData: { name: string; movies: ISavedMovie[] };
  token: string;
  logInUser: (name: string, movies: ISavedMovie[] , token: string) => void;
  logOutUser: () => void;
}
