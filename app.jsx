// src/App.jsx
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider }    from './contexts/AuthContext'
import AppRoutes           from './AppRoutes'
import Layout              from './components/Layout'
import './index.css'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </AuthProvider>
  )
}
