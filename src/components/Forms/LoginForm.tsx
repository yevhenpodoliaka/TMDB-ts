import useStateForm from 'hooks/useStateForm';
import { IStateForm } from 'interfaces/formInterfaces';
import { IRequestToLogin } from 'interfaces/authInterfaces';
import { loginUser } from 'service/auth-service';
import { useAuthUserContext } from 'hooks/useAuthUserContext';

import Button from 'components/Button/Button';
import styles from './Forms.module.css';

const LoginForm = () => {
  const { logIn } = useAuthUserContext();

  const initialState = {
    email: '',
    password: '',
  };

  const { state, handleChange } = useStateForm({
    initialState,
  });
  const { email, password } = state;
  function convertStateToRequest(state: IStateForm): IRequestToLogin {
    const request: IRequestToLogin = {
      email: state.email as string,
      password: state.password as string,
    };
    return request;
  }
  const request = convertStateToRequest(state);
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      loginUser(request)
        .then(data => {
          console.log("LOGIN FORM",data)
          if (data) logIn(data.name, data.token);
        })
        .catch(e => console.log(e));
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
