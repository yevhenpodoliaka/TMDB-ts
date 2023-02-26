import { useSearchParams } from 'react-router-dom';
import Button from '../Button/Button';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { useMemo } from 'react';
import style from './PagesOptionButtons.module.css';

interface IProps {
  totalPages: number;
}

const PagesOptionButtons = ({ totalPages }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { page } = params;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <p style={{textAlign:"center"}}>сторінка {page} з {totalPages }</p>
    <div className={style.wrap}>
      
      {Number(page) > 1 && (
        <Button
          aria-label="prev page"
          onClick={() => {
            setSearchParams({ ...params, page: (Number(page) - 1).toString() });
            scrollToTop();
          }}
        >
          <FcPrevious />
          prev
        </Button>
      )}
      {Number(page) !== totalPages && (
        <Button
          aria-label="next page"
          onClick={() => {
            setSearchParams({ ...params, page: (Number(page) + 1).toString() });
            scrollToTop();
          }}
        >
          next
          <FcNext />
        </Button>
      )}
      </div>
      </>
  );
};

export default PagesOptionButtons;
