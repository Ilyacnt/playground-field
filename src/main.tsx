import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
)
