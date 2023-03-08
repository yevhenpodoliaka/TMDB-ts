import useStateForm from 'hooks/useStateForm';
import Button from 'components/Button/Button';
import styles from './Forms.module.css';

const LoginForm = () => {
  const initialState = {
    email: '',
    password: '',
  };

  const { state, handleChange } = useStateForm({
    initialState,
  });
  const { email, password } = state;

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
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
    </form>
  );
};

export default LoginForm;
