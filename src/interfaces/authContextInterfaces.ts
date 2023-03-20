export interface IUserContext {
  isLoggedIn: boolean;
  userName: string;
  token: string;
  logInUser: (name: string, token: string) => void;
  logOutUser: () => void;
}
