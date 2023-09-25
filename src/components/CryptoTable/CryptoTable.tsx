import { ICryptoCoin } from '../../store/crypto/types'
import styles from './CryptoTable.module.css'

interface CryptoTableProps {
  data?: ICryptoCoin[]
}

const CryptoTable = ({ data = [] }: CryptoTableProps) => {
  return (
    <table className={styles.CryptoTable}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr key={coin.rank}>
            <td>{coin.rank}</td>
            <td>
              <img src={coin.icon} alt={`${coin.name} icon`} />
              {coin.name}
            </td>
            <td>{coin.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CryptoTable
