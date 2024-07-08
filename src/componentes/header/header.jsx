import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
        <img src="./src/assets/Icon-bar/Visual art.png" alt="logo_tipo" />
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Mais Vendidos</a></li>
                <li><a href="#">Tendências</a></li>
                <li><a href="#">Fale Conosco</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
