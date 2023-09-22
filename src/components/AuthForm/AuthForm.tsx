import styles from './AuthForm.module.css'
import cn from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

const AuthForm = () => {
  const [isSubmitting, setIsSubmiting] = useState(false)

  type UserAuth = Yup.InferType<typeof validationSchema>

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Обязательное поле').email('Некорректный адрес электронной почты'),
    password: Yup.string().required('Обязательное поле').min(6, 'Минимальная длинна 6 символов'),
  })

  const onFormSubmit = (values: UserAuth) => {
    setIsSubmiting(true)
    console.log('Submitted', values)

    setTimeout(() => {
      setIsSubmiting(false)
    }, 1000)
  }

  return (
    <div className={styles.FormContainer}>
      <h1>Авторизация</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onFormSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.Form}>
            <label
              className={cn(styles.Label, {
                [styles.ErrorLabel]: errors.email && touched.email,
              })}
            >
              Электронная почта
              <Field className={styles.Input} type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </label>
            <label
              className={cn(styles.Label, {
                [styles.ErrorLabel]: errors.password && touched.password,
              })}
            >
              Пароль
              <Field className={styles.Input} type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </label>
            <button
              className={styles.Button}
              type="submit"
              disabled={isSubmitting || !!errors.email || !!errors.password}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AuthForm
