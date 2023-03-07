import RegisterForm from 'components/Forms/RegisterForm';
import { IStateForm } from 'interfaces/formInterfaces';
import { IRequestToRegister } from 'interfaces/authInterfaces';
import { registerUser } from 'service/auth-service';
import { useAuthUserContext } from 'hooks/useAuthUserContext';

const RegisterPage = () => {
  const { logIn } = useAuthUserContext();

  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  function convertStateToRequest(state: IStateForm): IRequestToRegister {
    const request: IRequestToRegister = {
      name: state.name as string,
      email: state.email as string,
      password: state.password as string,
    };
    return request;
  }
  const handleSubmit = (value: IStateForm) => {
    const request = convertStateToRequest(value);
    registerUser(request)
      .then(data => logIn(data?.name!, data?.token!))
      .catch(e => console.log(e));
  };

  return (
    <>
      <RegisterForm initialState={initialState} onSubmit={handleSubmit} />
    </>
  );
};
export default RegisterPage;
