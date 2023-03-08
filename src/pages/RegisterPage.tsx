import RegisterForm from 'components/Forms/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  return (
    <>
      <RegisterForm />
      <Link to="/login">
        <p style={{ textAlign: 'center' , padding:"0 15px"}}>
          Якщо Ви вже зареєстровані перейдіть до сторінки входу
        </p>
      </Link>
    </>
  );
};
export default RegisterPage;
