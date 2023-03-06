import { useContext } from "react";
import { authUserContext } from "authUserContext";


export const useAuthUserContext =()=> useContext(authUserContext);
