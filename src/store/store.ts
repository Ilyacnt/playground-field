import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos/todosSlice'
import { goodsApi } from './goods/goodsApi'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
