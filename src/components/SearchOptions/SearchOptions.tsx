import style from './SearchOptions.module.css';
import data from '../../genresUa.json';
import createYearsList from '../../helpers/createYearsList';
import Dropdown from '../Dropdown/Dropdown';

const SearchOptions = () => {
    const years = createYearsList();
    


  return (
    <div className={style.optionsWrap}>
          <Dropdown optionsList={years} defaultText={'рік'}  searchParam="year"/>
          <Dropdown optionsList={data.genres} defaultText={'жанр'}searchParam="genres"  />
    </div>
  );
};

export default SearchOptions;
