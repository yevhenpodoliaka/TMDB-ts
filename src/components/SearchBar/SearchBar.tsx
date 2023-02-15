import { useState } from "react";
import style from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi"

// interface Props {
//   onSubmit: (value: string) => void;
// }

//  const SearchBar = ({ onSubmit }: Props): JSX.Element => {
//   const [value, setValue] = useState("");
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     setValue(e.currentTarget.value);
//   };
//   const handleSubmit = (e: React.SyntheticEvent): void => {
//     e.preventDefault();
//     onSubmit(value);
//     setValue("");
//   };

//   return (

//       <form className={style.form} onSubmit={handleSubmit}>
//         <input
//           className={style.input}
//           onChange={handleChange}
//           value={value}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="search film ..."
//         />
//         <button className={style.btnSearch} type="submit">
//        <FiSearch color="white"/>
//         </button>
//       </form>

//   );
// };



 const SearchBar = (): JSX.Element => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setValue("");
  };

  return (

      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          onChange={handleChange}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="search film ..."
        />
        <button className={style.btnSearch} type="submit">
       <FiSearch color="white"/>
        </button>
      </form>

  );
};

export default SearchBar