import {useState} from "react"
import Button from 'components/Button/Button';
import Spinner from 'components/Spinner/Spinner';
import styles from './Forms.module.css';
import { registerUser } from 'service/auth-service';
import useUserContext from 'hooks/useUserContext';
import { IRequestToRegister } from 'interfaces/authInterfaces';

import { Formik, Field, Form, FormikHelpers } from 'formik';

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false)

    const { logInUser } = useUserContext();
  const validateName = (value: string) => {
    if (!value) {
      return " Ім'я обов'язкове для реєстрації";
    } else if (value.length < 3) {
      return "Ім'я має бути не коротше трьох символів ";
    }
  };

  const validateEmail = (value: string) => {
    if (!value) {
      return " Пошта обов'язкова для реєстрації";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return 'Не правильний формат пошти';
    }
  };
  const validatePassword = (value: string) => {
          if (!value) {
        return " Пароль обов'язковий для реєстрації";
        } else if (value.length < 6) {
          return 'Довжина паролю має мути не коротше шести символів';
        }
  };
  const handleSubmit = (
        values: IRequestToRegister,
        { setSubmitting, resetForm }: FormikHelpers<IRequestToRegister>
      
      ) => {
        setIsLoading(true)
        registerUser(values).then((data) => {
             if (data) {
               logInUser(  data.name , data.token);
             }
          resetForm();
        }).catch((e:Error) => {
          if (e.message === "status 409") {
            alert(`Користувач з поштою ${values.email} вже зареєстрований`);
          }
          
           setSubmitting(false);
        }).finally(()=>setIsLoading(false))
      }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}

      onSubmit={handleSubmit}
    >
 { isLoading ? <Spinner /> :     ({ errors, touched }) => (
        <Form className={styles.form}>
          <label>
            <span className={styles.inputName}>Ім'я</span>
            <Field
              id="name"
              name="name"
              placeholder="Введіть Ваше ім'я"
              validate={validateName}
            />
            {touched.name && errors.name && (
              <span className={styles.inputError}>{errors.name}</span>
            )}
          </label>

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
             validate= {validatePassword}
            />
            {touched.password && errors.password && (
              <span className={styles.inputError}>{errors.password}</span>
            )}
          </label>
          <Button type="submit" aria-label="register">
            Зареєструватися
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
