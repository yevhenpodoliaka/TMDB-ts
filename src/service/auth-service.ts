import axios from 'axios';
import {
  IRequestToRegister,
  IRequestToLogin,
  IAuthResponse,
  IResponseCurrentUser,
} from 'interfaces/authInterfaces';

axios.defaults.baseURL = 'https://tmdb-backend.onrender.com/api';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = async ({
  name,
  email,
  password,
}: IRequestToRegister) => {
  try {
    const { data } = await axios.post<IAuthResponse>('auth/register', {
      name,
      email,
      password,
    });
    token.set(data.token);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('AxiosError', error.response?.data);
      throw new Error(error.response?.data.message);
    } else if (error instanceof Error) {
      console.log("Error",error);
      throw new Error(error.message);
    }
  }
 
};

export const loginUser = async ({ email, password }: IRequestToLogin) => {
  try {
    const { data } = await axios.post<IAuthResponse>('auth/login', {
      email,
      password,
    });
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCurrentUser = async (savedToken: string) => {
  token.set(savedToken);
  try {
    const { data } = await axios.get<IResponseCurrentUser>('auth/current');
    return data;
  } catch (error) {
    console.log(error);
  }
};


