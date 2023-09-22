import { useDeleteGoodsItemMutation } from '../../store/goods/goodsApi'
import { IGoodsItem } from '../../store/goods/types'
import styles from './GoodsItem.module.css'

interface GoodsItemProps extends IGoodsItem {}

const GoodsItem: React.FC<GoodsItemProps> = ({ id, name }) => {
  const [deleteGoodsItem] = useDeleteGoodsItemMutation()

  const onDeleteButtonClickHandler = () => {
    deleteGoodsItem(id)
  }

  return (
    <div className={styles.GoodsItem}>
      <button className={styles.DeleteButton} onClick={onDeleteButtonClickHandler}>
        X
      </button>
      {}
      <span>{name}</span>
    </div>
  )
}

export default GoodsItem
