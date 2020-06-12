import React from 'react'
import { Router } from 'react-router-dom'

import history from './history'
import {AuthProvider} from './Context/AuthContext'

// Componentes
import Control from './components/Control'
import TimeLine from './components/TimeLine'


import './App.css'

function App() {
  return (
  <AuthProvider>
    <Router history={history}>
    <body>  
        <div className="container">
            <header className="header">
              <section className="logo-bar">
                <h1> <a className="R">R</a>ifa <br></br> <a className="R">D</a>igital</h1>
              </section>
              <div className="menu-bar">
                  <a href="#home">Home  </a>
                  <a href="#register">Register  </a>
                  <a href="#explore_rifas">Explore Rifas  </a>
                  <a href="#contact">Contact  </a>
              </div>
              <Control isLoggedIn={false} />
            </header>
            <TimeLine/>
        </div>
    </body>
    </Router>
  </AuthProvider>
  )
}

export default App
