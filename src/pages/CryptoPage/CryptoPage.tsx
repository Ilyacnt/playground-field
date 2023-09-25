import { useEffect, useState } from 'react'
import CryptoTable from '../../components/CryptoTable/CryptoTable'
import { ICryptoCoin } from '../../store/crypto/types'
import styles from './CryptoPage.module.css'
import axios from 'axios'

const CryptoPage = () => {
  const [coins, setCoins] = useState<ICryptoCoin[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const fetchCoins = async () => {
    try {
      setLoading(true)
      setError('')
      const { data } = await axios.get<{ coins: ICryptoCoin[] }>(
        'https://api.coinstats.app/public/v1/coins',
        {
          params: {
            limit: 10,
          },
        }
      )
      setCoins(data.coins)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
        console.error(error.message)
      } else {
        setError('Something went wrong')
        console.log(error)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <div className={styles.CryptoPage}>{loading ? 'Loading...' : <CryptoTable data={coins} />}</div>
  )
}

export default CryptoPage
