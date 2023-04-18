import axios from 'axios';
import { ISavedMovie } from 'interfaces/movieInterfaces';
interface IResponseSavedMovie {
  movies: ISavedMovie[];
}
export const addMovie = async (movieId:string,group:string) => {
    try {
        const { data } = await axios.post<IResponseSavedMovie>('movies/', {
          movieId,
          group,
        }); 
      return data  
    } catch (error) {
        if (axios.isAxiosError(error)) {
                 if (error.response?.data.message) {
        throw new Error(error.response?.data.message);
      }
        } else {
            throw new Error('server Error');  
        }
    }
}

export const updateMovie = async (_id: string, group: string) => {
  try {
    const { data } = await axios.patch<IResponseSavedMovie>(`movies/${_id}`, {
      group: group,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.message) {
        throw new Error(error.response?.data.message);
      }
    } else {
      throw new Error('server Error');
    }
  }
};

export const removeMovie = async (_id: string) => {
  try {
    const { data } = await axios.delete<IResponseSavedMovie>(`movies/${_id}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.message) {
        throw new Error(error.response?.data.message);
      }
    } else {
      throw new Error('server Error');
    }
  }
};


export const getAllMovies=async()=>{
    try {
      const { data } = await axios.get<IResponseSavedMovie>('movies/');
     console.log(data, 'data');
      return data;

    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.message) {
          throw new Error(error.response?.data.message);
        }
      } else {
        throw new Error('server Error');
      }
    }
}