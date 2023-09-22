export interface ITodoItem {
  id: number
  title: string
  body: string
  completed: boolean
}

export interface TodosInitialState {
  todos: ITodoItem[]
}
