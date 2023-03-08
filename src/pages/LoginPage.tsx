import LoginForm from 'components/Forms/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  return (
    <>
      <h1 style={{ textAlign: 'center', padding: '0 15px' }}>
        СТОРІНКА НА ЕТАПІ РОЗРОБКИ
      </h1>
      <LoginForm />
      <Link to="/register">
        <p style={{ textAlign: 'center' }}>
          Якщо Ви не зареєстровані перейдіть до сторінки реєстрації
        </p>
      </Link>
    </>
  );
};

export default LoginPage;
