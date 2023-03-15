import Button from 'components/Button/Button';
import styles from './Forms.module.css';
import { registerUser } from 'service/auth-service';
import { IRequestToRegister } from 'interfaces/authInterfaces';

import { Formik, Field, Form, FormikHelpers } from 'formik';

const RegisterForm = () => {
  
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
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}

      onSubmit={(
        values: IRequestToRegister,
        { setSubmitting, resetForm }: FormikHelpers<IRequestToRegister>
      
      ) => {
        registerUser(values).then(() => {
          resetForm();
        }).catch((e:Error) => {
          if (e.message === "status 409") {
            alert(`Користувач з поштою ${values.email} вже зареєстрований`);
          }
          
           setSubmitting(false);
        });
      }}
    >
      {({ errors, touched }) => (
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



      // validate={values => {
      //   const errors: FormikErrors<IRequestToRegister> = {};
      // if (!values.name) {
      //   errors.name = " Ім'я обов'язкове для реєстрації";
      // } else if (values.name.length < 3) {
      //   errors.name = "Ім'я має бути не коротше трьох символів ";
      // }
      // if (!values.email) {
      //   errors.email = " Пошта обов'язкова для реєстрації";
      // } else if (
      //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      // ) {
      //   errors.email = 'Не правильний формат пошти';
      // }
      // if (!values.password) {
      //   errors.password = " Пароль обов'язковий для реєстрації";
      // } else if (values.password.length < 6) {
      //   errors.password = 'Довжина паролю має мути не коротше шести символів';
      // }
      // return errors;
      // }}