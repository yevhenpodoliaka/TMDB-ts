export interface IAuthUserContext {
  isLoggedIn: boolean;
  userName: string;
  logIn: (name: string, token: string) => void;
  logOut: () => void;
  userToken: string;
  refreshUser: (name: string) => void;
}
