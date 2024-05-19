import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./sidebar.css";
import { Context } from "../../context/context";
const SideBar = () => {

  const[extended,setExtended]=useState(false)
  const {onSent,prevPrompts,setRecentPrompt}=useContext(Context)
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon}></img>
        <div className="new-chat">
          <img src={assets.plus_icon} />
          {extended?<p>New Chat</p>:null}
          
        </div>
        {extended? <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompts.map((item,index)=>{
            return (
              <div className="recent-entry">
              <img src={assets.message_icon} />
              <p>{item.slice(0,18)}...</p>
            </div>
            )
          })}
         
        </div> :null}
       
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
        <img src={assets.question_icon} />
        {extended?<p>Help</p>:null}
        
        </div>
        
        <div className="bottom-item recent-entry">
        <img src={assets.history_icon} />
        {extended?<p>Activity</p>:null}
        
        </div>
       
        <div className="bottom-item recent-entry">
        <img src={assets.setting_icon} />
        {extended ?<p>Settings</p>:null}
        
        </div>
        
      </div>
    </div>
  );
};

export default SideBar;
