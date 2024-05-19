import { createContext, useState } from "react";
import runChat from "../config/gemini";
export const Context=createContext();

const ContextProvide=(props)=>{
    const [input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompts,setPrevPrompts]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("");

    const onSent=async(prompt)=>
        {
            setResultData("")
            setLoading(true)
            setShowResult(true)
            setRecentPrompt(input)
           const response= await runChat(input)
            setResultData(response)
            setLoading(false)
            setInput("")

        }
   
      
    const contextValue={
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        input,
        setInput
        



       
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}
export default ContextProvide;   