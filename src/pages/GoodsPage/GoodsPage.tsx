import { useState } from 'react'
import GoodsItem from '../../components/GoodsItem/GoodsItem'
import { useAddGoodsItemMutation, useGetGoodsQuery } from '../../store/goods/goodsApi'
import styles from './GoodsPage.module.css'

const GoodsPage = () => {
  const [newProductName, setNewProductName] = useState<string>('')
  const { data = [], isLoading, isError } = useGetGoodsQuery('')
  const [addGoodsItem] = useAddGoodsItemMutation()

  const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProductName(event.target.value)
  }

  const onButtonHandler = async () => {
    if (newProductName) {
      await addGoodsItem({ id: Date.now(), name: newProductName }).unwrap()
    }
  }

  return (
    <div className={styles.GoodsPage}>
      <div className={styles.Form}>
        <input
          className={styles.Input}
          placeholder="New product name"
          value={newProductName}
          onInput={onInputHandler}
        />
        <button className={styles.Button} onClick={onButtonHandler}>
          Add product
        </button>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error...</div>
      ) : (
        data.map((goodsItem) => (
          <GoodsItem key={goodsItem.id} id={goodsItem.id} name={goodsItem.name} />
        ))
      )}
    </div>
  )
}

export default GoodsPage
