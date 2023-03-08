import RegisterForm from 'components/Forms/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  return (
    <>
      <RegisterForm />
      <Link to="/login">
        Якщо Ви вже зареєстровані перейдіть до сторінки входу
      </Link>
    </>
  );
};
export default RegisterPage;
