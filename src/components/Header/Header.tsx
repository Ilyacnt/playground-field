import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        <Link className={styles.Link} to={'/'}>
          Playground
        </Link>
      </div>
      <div className={styles.Links}>
        <Link className={styles.Link} to={'/goods'}>
          Goods
        </Link>
        <Link className={styles.Link} to={'/chart'}>
          Chart
        </Link>
        <Link className={styles.Link} to={'/todos'}>
          Todos
        </Link>
      </div>
    </header>
  )
}

export default Header
