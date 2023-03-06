import LoginForm from "components/Forms/LoginForm"
import { IStateForm} from "interfaces";

const LoginPage = () => {
     const initialState = {
       email: '',
       password: '',
  };
    const handleSubmit = (value: IStateForm) => {
      console.log(value);
    };
  return (
    <>
      <LoginForm initialState={initialState} onSubmit={handleSubmit} />
    </>
  );
}
export default LoginPage
