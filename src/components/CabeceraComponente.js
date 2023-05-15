import React from 'react'
import logo from '../img/logo.png';

export const CabeceraComponente = () => {
  return (
    <header className="App-header">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <div>
            <img src={logo} className="App-logo" alt="logo" /> Pizza Plus
          </div>
          <div>
            <a className='Enlaces' href="#">Nosotros</a>
            <a className='Enlaces' href="#">Ayuda</a>
            <a className='Enlaces' href="#">Ubicacion</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
