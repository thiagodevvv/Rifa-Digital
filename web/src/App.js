import React from 'react'
import { Router } from 'react-router-dom'

import history from './history'
import {AuthProvider} from './Context/AuthContext'
import Routes from './routes'


function App() {
  return (
  <AuthProvider>
    <Router history={history}>
      <Routes />
    </Router>
  </AuthProvider>
  )
}

export default App
