import { useEffect, useState } from 'react'
import CryptoTable from '../../components/CryptoTable/CryptoTable'
import { ICryptoCoin } from '../../store/crypto/types'
import styles from './CryptoPage.module.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchCoins = async (skip: number = 0): Promise<ICryptoCoin[]> => {
  const { data } = await axios.get<{ coins: ICryptoCoin[] }>(
    'https://api.coinstats.app/public/v1/coins',
    {
      params: {
        limit: 10,
        skip: skip,
      },
    }
  )
  return data.coins
}

const CryptoPage = () => {
  const [page, setPage] = useState(0)
  const { data: coins, isLoading } = useQuery({
    queryKey: ['coins', page],
    queryFn: () => fetchCoins(page),
    keepPreviousData: true,
  })

  return (
    <div className={styles.CryptoPage}>
      <CryptoTable data={coins} loading={isLoading} />
      <div className={styles.PageButtons}>
        <button className={styles.PageButton} onClick={() => setPage((p) => p - 10)}>
          {'<'}
        </button>
        <button className={styles.PageButton} onClick={() => setPage((p) => p + 10)}>
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default CryptoPage
