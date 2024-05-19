import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}></img>
        </div>
        <div className="main-container">

            {!showResult
            ?<>
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
            </>

            :
            <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon}/>
                    <p>
                        {recentPrompt}
                    </p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon}/>
                    {loading
                    ?
                   <div className="loader">
                    <hr />
                    <hr />
                    <hr />

                   </div>
                   :
                   <p dangerouslySetInnerHTML={{__html:resultData}}>
                        
                   </p>
                }
                   

                </div>
            </div>
            }
           
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
                <p className="bottom-info">
                  Gemini may display inaacurate info,including about people ,so double-check   
                </p>
            </div>

        </div>

      
    </div>
  )
}

export default Main
 