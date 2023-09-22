import AuthForm from '../../components/AuthForm/AuthForm'
import styles from './AuthPage.module.css'

const AuthPage = () => {
  return (
    <div className={styles.AuthPage}>
      <AuthForm />
    </div>
  )
}

export default AuthPage
