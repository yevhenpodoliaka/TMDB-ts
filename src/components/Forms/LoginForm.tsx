import useForm from 'hooks/useForm';
import { Link } from 'react-router-dom';
import { IFormProps } from 'interfaces/formInterfaces';
import Button from 'components/Button/Button';
import styles from './Forms.module.css';

const LoginForm = ({ onSubmit, initialState }: IFormProps) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      handleSubmit(e);
    } else {
      alert('Всі поля мають бути заповнені');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <label>
        <span className={styles.inputName}>Пошта</span>
        <input
          type="email"
          name="email"
          placeholder="Введіть Вашу пошту"
          value={typeof email === 'string' ? email : ''}
          onChange={handleChange}
        />
      </label>

      <label>
        <span className={styles.inputName}>Пароль</span>
        <input
          type="password"
          name="password"
          placeholder="Введіть Ваш пароль"
          value={typeof password === 'string' ? password : ''}
          onChange={handleChange}
        />
      </label>

      <Button aria-label="register button" type="submit">
        увійти
      </Button>
      <Link to="/register">
        Якщо Ви не зареєстровані перейдіть до сторінки реєстрації
      </Link>
    </form>
  );
};

export default LoginForm;
