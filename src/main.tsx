import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout />
    </Provider>
  </BrowserRouter>
)
