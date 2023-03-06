export interface IAuthUserContext {
  isLoggedIn: boolean;
  username: string;
  logIn: (name: string, token: string) => void;
  logOut: () => void;
  userToken: string;

}
