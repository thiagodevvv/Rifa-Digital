import React, {useEffect}from 'react'

import Control from '../components/Control'
import TimeLine from '../components/TimeLine'

import './style/StylePages.css'

function Home () {
    useEffect(() => {
        document.title = "Rifa Digital"
     }, [])
    return (
        <body>
        <div className="container">
            <header className="header">
                <section className="logo-bar">
                    <h1> <span className="orange">R</span>ifa <br></br> <span className="orange">D</span>igital</h1>
                </section>
              <div className="menu-bar">
                  <a className="header-box-shadow" href="/">Home  </a>
                  <a className="header-box-shadow" href="/register">Register  </a>
                  <a className="header-box-shadow" href="#explore_rifas">Explore Rifas  </a>
                  <a className="header-box-shadow" href="#contact">Contact  </a>
              </div>
            </header>
        <div className="container2">
            <TimeLine/>
            <Control isLoggedIn={false} />
        </div>    
        </div>
    </body>
    )
}

export default Home