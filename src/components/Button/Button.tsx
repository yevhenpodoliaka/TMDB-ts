import styles from './Button.module.css';

interface IProps {
  onClick?: () => void;
  children: React.ReactNode;
  'aria-label': string;
  type:"button"|"submit"
}

const Button = ({ children, onClick,type }: IProps) => (
  <button
    className={styles.button}
    type={type}
    onClick={onClick}>
    {children}
  </button>
);

export default Button;
