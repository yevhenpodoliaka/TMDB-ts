import RegisterForm from 'components/Forms/RegisterForm';
import { IStateForm } from 'interfaces/formInterfaces';

const RegisterPage = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = (value: IStateForm) => {
    console.log(value);
  };
  return (
    <>
      <RegisterForm initialState={initialState} onSubmit={handleSubmit} />
    </>
  );
};
export default RegisterPage;
