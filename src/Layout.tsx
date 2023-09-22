import { Routes, Route, Navigate } from 'react-router-dom'
import styles from './Layout.module.css'
import Header from './components/Header/Header'

import { Suspense, lazy } from 'react'
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'))
const TodosPage = lazy(() => import('./pages/TodosPage/TodosPage'))
const GoodsPage = lazy(() => import('./pages/GoodsPage/GoodsPage'))
const ChartPage = lazy(() => import('./pages/ChartPage/ChartPage'))

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <section className={styles.Content}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/goods" element={<GoodsPage />} />
            <Route path="/chart" element={<ChartPage />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </Routes>
        </Suspense>
      </section>
    </div>
  )
}

export default Layout
