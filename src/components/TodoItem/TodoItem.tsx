import { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { changeTodoComplete, removeTodo } from '../../store/todos/todosSlice'
import { ITodoItem } from '../../store/todos/types'
import styles from './TodoItem.module.css'

interface TodoItemProps extends ITodoItem {}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, body, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed)

  const dispatch = useAppDispatch()

  const onDeleteButtonHandler = () => {
    dispatch(removeTodo(id))
  }

  const onChangeCheckboxHandler = () => {
    setIsCompleted((prev) => !prev)

    dispatch(changeTodoComplete({ id: id, completed: isCompleted }))
  }

  return (
    <div className={styles.TodoItem}>
      <button className={styles.DeleteButton} onClick={onDeleteButtonHandler}>
        X
      </button>
      <div className={styles.Info}>
        <span className={styles.Title}>{title}</span>
        <span className={styles.Body}>{body}</span>
        <input
          className={styles.Checkbox}
          type="checkbox"
          checked={isCompleted}
          onChange={onChangeCheckboxHandler}
        />
      </div>
    </div>
  )
}

export default TodoItem
