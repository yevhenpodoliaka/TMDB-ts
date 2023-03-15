export interface IUserData{
    name:string,
}

export interface IUserContext {
  isLoggedIn: boolean;
  userData: IUserData;
  token: string;
  logInUser: (dataUser: IUserData,token:string) => void;
  logOutUser: () => void;
}
