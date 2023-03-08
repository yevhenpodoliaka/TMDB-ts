import RegisterForm from 'components/Forms/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  return (
    <>
      <h1 style={{ textAlign: 'center', padding: '0 15px' }}>
        СТОРІНКА НА ЕТАПІ РОЗРОБКИ
      </h1>
      <RegisterForm />
      <Link to="/login">
        <p style={{ textAlign: 'center', padding: '0 15px' }}>
          Якщо Ви вже зареєстровані перейдіть до сторінки входу
        </p>
      </Link>
    </>
  );
};
export default RegisterPage;
