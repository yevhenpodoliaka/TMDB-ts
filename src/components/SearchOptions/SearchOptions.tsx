import styles from './SearchOptions.module.css';
import data from '../../genresUa.json';
import createYearsList from '../../helpers/createYearsList';
import Dropdown from '../Dropdown/Dropdown';

const SearchOptions = () => {
  const years = createYearsList();

  return (
    <div className={styles.optionsWrap}>
      <Dropdown optionsList={years} defaultText={'рік'} searchParam="year" />
      <Dropdown
        optionsList={data.genres}
        defaultText={'жанр'}
        searchParam="genre"
      />
    </div>
  );
};

export default SearchOptions;
