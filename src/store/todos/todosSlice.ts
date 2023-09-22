import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITodoItem, TodosInitialState } from './types'

const initialState: TodosInitialState = {
  todos: [
    {
      id: 1,
      title: 'Make charts',
      body: 'Page with chart component',
      completed: false,
    },
  ],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<ITodoItem['id']>) => {
      state.todos = state.todos.filter((todo: ITodoItem) => todo.id !== action.payload)
    },
    changeTodoComplete: (
      state,
      action: PayloadAction<{ id: ITodoItem['id']; completed: ITodoItem['completed'] }>
    ) => {
      const todoToChange = state.todos.find((todo) => todo.id === action.payload.id)

      if (todoToChange) {
        todoToChange.completed = action.payload.completed
      }
    },
  },
})

export const { addTodo, removeTodo, changeTodoComplete } = todosSlice.actions
export const todosReducer = todosSlice.reducer
