import React from 'react'
import "./AppDawnload.css"
import { assets } from '../../assets/assets'

function AppDawnload() {
  return (
    <div className='app-dawnload' id='app-dawnload'>
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className="app-dawnload-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDawnload