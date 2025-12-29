import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
         <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse nisi repellendus error laudantium sunt odit, vitae aliquam non, asperiores nobis minus vel nostrum autem cumque. Facere accusamus consectetur illo!</p>
                <div className="foter-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div  className='footer-content-center'>
                 <h2>COMPANY</h2>
                 <li>Home</li>
                 <li>About us</li>
                 <li>Delivary</li>
                 <li>Privacy policy</li>

            </div>
            <div  className='footer-content-right'>
                <h2>GET IN TUCH</h2>
                <ul>
                    <li>+91-930-785-8256</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
         </div>
         <hr />
         <p className="footer-copyright">
            Copyright 2025 © Tomato Food Delivery App. All rights reserved.
         </p>
    </div>
  )
}

export default Footer