import styles from './Button.module.css';

interface IProps {
  onClick: () => void;
  children: React.ReactNode;
  'aria-label': string;
}

const Button = ({ children, onClick }: IProps) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
