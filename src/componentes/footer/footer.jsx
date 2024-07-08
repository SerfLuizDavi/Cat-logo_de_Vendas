import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="top-footer">
            <h2>Nossas Redes Sociais</h2>
        </div>

        <div className="rs-footer">
        <ul>
            <li><a href="#">FACEBOOK</a></li>
            <li><a href="#">TIKTOK</a></li>
            <li><a href="#">INSTAGRAM</a></li>
            <li><a href="#">YOUTUBE</a></li>
            <li><a href="#">X</a></li>
        </ul>   
        </div>

        <div className='informações_add'>
        <ul>
            <li><a href="#">DEFINIÇÕES DE COOKIES</a></li>
            <li><a href="#">POLITICA DE PRIVACIDADE E COOKIES</a></li>
            <li><a href="#">CONDIÇÕES DE COMPRA</a></li>
            
        </ul>  
        </div>
        
        <div className='informações_contato'>
            <p>Informações para contato, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt nam quibusdam accusamus doloribus mollitia, sed itaque animi consectetur exercitationem pariatur recusandae numquam repellendus reiciendis porro harum vero aut, deserunt sequi.</p>
        </div>
       

    </footer>
  )
}

export default Footer
