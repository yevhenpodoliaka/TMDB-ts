import styles from './MovieDetailsOptions.module.css';
import { useState } from 'react';

interface IOption {
  value: string;
  label: string;
}

interface IOptionList {
  options: IOption[];
  onChange: (value: string) => void;
}

const MovieDetailsOptions = ({ options, onChange }: IOptionList) => {
  const [optionValue, setOptionValue] = useState('about');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className={styles.radioButtonsContainer}>
      {options.map(({ value, label }) => (
        <label key={value}>
          <input
            type="radio"
            name="option"
            value={value}
            checked={optionValue === value}
            onChange={handleChange}
          />
          <span> {label}</span>
        </label>
      ))}
    </div>
  );
};

export default MovieDetailsOptions;
