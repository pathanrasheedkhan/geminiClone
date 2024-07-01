/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import run from "../Config/gemini";



 export const Context = createContext();
 const ContextProvider =(props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompts] = useState("");
    const [prevPrompt, setPrevPrompts] = useState([]);
    const [showResult, setShowResults] = useState(false);
    const [loading, setLoading ] = useState(false);
    const [resultData, setresultData ] = useState("");

    const  delayPara = (index,nextWord) => {
        setTimeout(function(){
            setresultData(prev=>prev+nextWord);


        },75*index)

    }

    const newChat = ()=>{
        setLoading(false);
        setShowResults(false)
    }




    const onSent = async (prompt) => {
        setresultData("");
        setLoading(true);
        setShowResults(true);
        setRecentPrompts(input)
        setPrevPrompts(prev=>[...prev, input]);
       const response = await run(input)
       let responArray = response.split("**")
       let newResponse; 
       for(let i = 0; i < responArray.length; i++) 
        {
            if( i=== 0 || i%2 !== 1){
                newResponse += responArray[i];

            }
            else{
                newResponse += "<b>"+responArray[i] + "</b>";
            }

        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split("");
        for(let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord+"")
        }
       
       setLoading(false);
       setInput("")
        

    }
    
    const contextValue = {
        prevPrompt,
        setPrevPrompts,
        onSent,
        setRecentPrompts,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
        

    }
    return (
        <Context.Provider  value={contextValue}>
            {props.children}
        </Context.Provider>
    )    
 }
 export default ContextProvider


