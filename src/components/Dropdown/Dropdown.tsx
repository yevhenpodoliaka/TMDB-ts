import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import style from './Dropdown.module.css';

interface Option {
  id: number;
  name: string;
}

interface IProps {
  optionsList: Option[];
  defaultText: string;
  searchParam: string;
}

const Dropdown = ({ optionsList, defaultText, searchParam }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

  const [defaultSelectText, setDefaultSelectText] =
    useState<string>(defaultText);
  const [showOptionList, setShowOptionList] = useState(false);

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { year, genre } = params;

  useEffect(() => {
    if (!year && !genre) {
      setDefaultSelectText(defaultText);
    }
    if (year && defaultText === 'рік') {
      setDefaultSelectText(year);
    }
    if (genre && defaultText === 'жанр') {
      setDefaultSelectText(genre);
    }
  }, [defaultText, genre, year]);
  const handleListDisplay = () => {
    setShowOptionList(prevState => !prevState);
  };

  const handleOptionClick = (
    e: React.MouseEvent<HTMLLIElement>,
    name: string
  ) => {
    setDefaultSelectText(name);
    setShowOptionList(false);
    searchParam === 'year'
      ? setSearchParams({ ...params, year: name })
      : setSearchParams({ ...params, genre: name });
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      event.target instanceof HTMLElement &&
      !event.target.closest(`#${defaultText}`)
    ) {
      setShowOptionList(false);
    }
  };

  const lockPage = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockPage = () => {
    document.body.style.overflow = '';
  };

  if (showOptionList) {
    lockPage();
    document.addEventListener('click', handleOutsideClick);
  } else {
    unlockPage();
    document.removeEventListener('click', handleOutsideClick);
  }

  return (
    <div className={style.dropdown}>
      <div
        id={defaultText}
        className={
          showOptionList
            ? `${style.selectedText} ${style.active}`
            : `${style.selectedText}`
        }
        onClick={handleListDisplay}
      >
        {defaultSelectText}
      </div>
      {showOptionList && (
        <ul className={style.optionList}>
          {optionsList.map(({ id, name }) => (
            <li
              className={style.option}
              key={id}
              onClick={e => handleOptionClick(e, name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
