import { useState } from 'react';
import styles from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  const params = {
    query: value,
    page: '1',
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    if (value !== '') {
      e.preventDefault();
      setSearchParams({ ...params });
      setValue('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleChange}
        value={value}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="введіть слово для пошуку ..."
      />
      <button
        className={styles.btnSearch}
        type="submit"
        disabled={value === ''}
      >
        <FiSearch color="white" />
      </button>
    </form>
  );
};

export default SearchBar;
