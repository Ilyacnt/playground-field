import TodoItem from '../../components/TodoItem/TodoItem'
import { useAppSelector } from '../../store/hooks'
import styles from './TodosPage.module.css'

const TodosPage = () => {
  const todos = useAppSelector((state) => state.todos.todos)

  return (
    <div className={styles.TodosPage}>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          body={todo.body}
          completed={todo.completed}
        />
      ))}
    </div>
  )
}

export default TodosPage
