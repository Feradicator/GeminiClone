import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}></img>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello Shivam</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful place to see on an upcoming road trip</p>
                    <img src={assets.compass_icon}/>
                </div>
                <div className="card">
                    <p>Briefly summarize this concept : urban planning</p>
                    <img src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for work retreat</p>
                    <img src={assets.message_icon}/>
                </div>
                <div className="card">
                    <p>Improve the readability of the following code </p>
                    <img src={assets.code_icon}/>
                </div>
            </div>

        </div>

      
    </div>
  )
}

export default Main
 