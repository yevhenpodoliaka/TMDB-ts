import Button from 'components/Button/Button';
import styles from './Forms.module.css';
import { loginUser } from 'service/auth-service';
import useUserContext from 'hooks/useUserContext';
import { IRequestToLogin } from 'interfaces/authInterfaces';
import { Formik, Field, Form, FormikHelpers } from 'formik';

const LoginForm = () => {
  const { logInUser} = useUserContext();
  const validateEmail = (value: string) => {
    if (!value) {
      return " Пошта обов'язкова для входу";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return 'Не правильний формат пошти';
    }
  };
  const validatePassword = (value: string) => {
    if (!value) {
      return " Пароль обов'язковий для входу";
    } else if (value.length < 6) {
      return 'Довжина паролю має мути не коротше шести символів';
    }
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(
        values: IRequestToLogin,
        { setSubmitting, resetForm }: FormikHelpers<IRequestToLogin>
      ) => {
        loginUser(values)
          .then(data => {
            if (data) {
              logInUser({ name: data.name }, data.token);
            }
            resetForm();
          })
          .catch(e => {
            if (e === 'Email not found' || 'Password wrong') {
              alert(`Перевірте Правильність вводу пошти або паролю`);
            }
            setSubmitting(false);
          });
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label>
            <span className={styles.inputName}>Пошта</span>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="post@mail.com"
              validate={validateEmail}
            />
            {touched.email && errors.email && (
              <span className={styles.inputError}>{errors.email}</span>
            )}
          </label>

          <label>
            <span className={styles.inputName}>Пароль</span>
            <Field
              id="password"
              name="password"
              type="password"
              validate={validatePassword}
            />
            {touched.password && errors.password && (
              <span className={styles.inputError}>{errors.password}</span>
            )}
          </label>
          <Button type="submit" aria-label="register">
            Увійти
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
