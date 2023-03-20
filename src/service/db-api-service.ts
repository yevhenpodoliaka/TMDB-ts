import axios from 'axios';

export const addMovie = async (movieId:string,group:string) => {
    try {
        const { data } = await axios.post("movies/", { movieId, group }) 
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
    const { data } = await axios.patch(`movies/${_id}`, {
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
    const { data } = await axios.delete(`movies/${_id}`);
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
      const { data } = await axios.get('/');
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