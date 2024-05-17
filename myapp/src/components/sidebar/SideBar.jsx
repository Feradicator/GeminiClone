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
        <div className="recent">
            <p className='recent-title'>
                recent 
            </p>
            <div className="recent-entry">
                <img src={assets.message_icon }/>
                <p>what is react...</p>
            </div>

        </div>
        <div className='bottom'>
            <div className="bottom-item recent-entry"></div>
            <img src={assets.question_icon}/>
            <p>help</p>
        </div>
        <div className='bottom'>
            <div className="bottom-item recent-entry"></div>
            <img src={assets.history_icon}/>
            <p>Activity</p>
        </div>
        <div className='bottom'>
            <div className="bottom-item recent-entry"></div>
            <img src={assets.setting_icon}/>
            <p>Settings</p>
        </div>
      
    </div>
  )
}

export default SideBar
