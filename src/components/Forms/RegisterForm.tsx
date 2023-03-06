import useForm from 'hooks/useForm';
import { Link } from 'react-router-dom';
import { IFormProps } from 'interfaces/formInterfaces';
import Button from 'components/Button/Button';
import styles from './Forms.module.css';

const RegisterForm = ({ onSubmit, initialState }: IFormProps) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && password) {
      handleSubmit(e);
    } else {
      alert('Всі поля мають бути заповнені');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <label>
        <span className={styles.inputName}>Ім'я</span>
        <input
          type="text"
          name="name"
          placeholder="Введіть Ваше ім'я"
          value={typeof name === 'string' ? name : ''}
          onChange={handleChange}
        />
      </label>

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
        зареєструватися
      </Button>
      <Link to="/login">
        Якщо Ви вже зареєстровані перейдіть до сторінки входу
      </Link>
    </form>
  );
};

export default RegisterForm;
