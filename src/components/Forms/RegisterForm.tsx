import useStateForm from 'hooks/useStateForm';
import { useAuthUserContext } from 'hooks/useAuthUserContext';
import { registerUser } from 'service/auth-service';
import { IRequestToRegister } from 'interfaces/authInterfaces';
import { IStateForm } from 'interfaces/formInterfaces';

import Button from 'components/Button/Button';
import styles from './Forms.module.css';


const RegisterForm = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const { logIn} = useAuthUserContext();
  const { state, handleChange } = useStateForm({
    initialState,
  });

  function convertStateToRequest(state: IStateForm): IRequestToRegister {
    const request: IRequestToRegister = {
      name: state.name as string,
      email: state.email as string,
      password: state.password as string,
    };
    return request;
  }
  const request = convertStateToRequest(state);

  const { name, email, password } = request;

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 6) {
      alert('Пароль має бути не менше 6 символів!!!');
      return
    }
    if (name && email && password) {
      registerUser(request)
        .then(data => {
          if (data) logIn(data?.name, data?.token);
        })
        .catch((e:Error) => {
          console.log("error",e)
          console.log('message', e.message);
          if (e.message) {
             alert(e.message);
          }
         
        });
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
    </form>
  );
};

export default RegisterForm;
