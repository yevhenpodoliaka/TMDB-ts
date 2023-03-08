import LoginForm from 'components/Forms/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  return (
    <>
      <LoginForm />
      <Link to="/register">
        Якщо Ви не зареєстровані перейдіть до сторінки реєстрації
      </Link>
    </>
  );
};

export default LoginPage;
