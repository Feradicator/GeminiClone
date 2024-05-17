import React from 'react'
import { assets } from '../../assets/assets'
import './sidebar.css' 
const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
        <img className='menu'src={assets.menu_icon}></img>
        <div className="new-chat"></div>
        <img src={assets.plus_icon}/>
        <p>new chat</p>
        </div>
        <div className='bottom'>


        </div>
      
    </div>
  )
}

export default SideBar
