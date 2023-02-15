import { useState } from "react";
import style from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [, setSearchParams] = useSearchParams();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  const params = {
    query: value,
    page:"1"
}
// EventType??????? FORM
  const handleSubmit = (e: React.SyntheticEvent): void => {
    if (value !== "") {
    e.preventDefault();//?????????????????
    setSearchParams({ ...params });
    setValue(""); 
    }
 
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
      <button className={style.btnSearch} type="submit" disabled={value===""}>
        <FiSearch color="white" />
      </button>
    </form>
  );
};

export default SearchBar;
