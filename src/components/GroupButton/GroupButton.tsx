import { useEffect } from 'react';
import { addMovie, updateMovie, removeMovie } from 'service/db-api-service';


interface IProps {
  movieId: string;
  groupName: 'watched' | 'favorites' | 'queued';
  btnText: 'Переглянуте' | 'Улюблене' | 'В черзі';
}

const GroupButton = ({ movieId, groupName, btnText }: IProps) => {

    
    // const isActive= movies.find(i => i.movieId === movieId);

    
  
  // const handleClick = () => {
  //   if (isActive && isActive.group === groupName) {
  //     removeMovie(isActive._id).then(console.log).catch(console.log);
  //   } else {
  //     isActive
  //       ? updateMovie(isActive._id, groupName)
  //           .then(console.log)
  //           .catch(console.log)
  //       : addMovie(movieId, groupName).then(console.log).catch(console.log);
  //   }
  // };
  // return (
  //   <button type="button" onClick={handleClick}>
  //     {btnText}
  //   </button>
  // );
};

export default GroupButton;
