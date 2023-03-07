import LoginForm from 'components/Forms/LoginForm';
import { IStateForm } from 'interfaces/formInterfaces';
import { IRequestToLogin} from 'interfaces/authInterfaces';
import { loginUser } from 'service/auth-service';
import { useAuthUserContext } from 'hooks/useAuthUserContext';
const LoginPage = () => {
  const { logIn } = useAuthUserContext();

  const initialState = {
    email: '',
    password: '',
  };

  function convertStateToRequest(state: IStateForm): IRequestToLogin {
    const request: IRequestToLogin = {
      email: state.email as string,
      password: state.password as string,
    };
    return request;
  }
  const handleSubmit = (value: IStateForm) => {
    const request = convertStateToRequest(value);
    loginUser(request)
      .then(data => logIn(data?.name!, data?.token!))
      .catch(e => console.log(e));
  };
  return (
    <>
      <LoginForm initialState={initialState} onSubmit={handleSubmit} />
    </>
  );
};
export default LoginPage;
