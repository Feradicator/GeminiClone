import { createContext } from "react";
export const Context=createContext();
const ContextProvide=(props)=>{
    const contextValue={

        
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}
export default ContextProvide;