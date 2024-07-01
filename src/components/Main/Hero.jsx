/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Hero = () => {

    const{onSent, recentPrompt, showResult, loading, resultData, input, setInput} = useContext(Context)
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">


            {!showResult
            ?<>
             
             <div className="greet">
                <p><span>Hello Rk</span></p>
                <p>How can i help you Todat</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p> copass to show you the east west north south  </p>
                    <a href="https://onlinecompass.app/"><img src={assets.compass_icon} alt="" /></a>
                </div>

                <div className="card">
                    <p>for discussing the ides you have just click on me or if any carer advise </p>
                    <a href="https://onlinecompass.app/"><img src={assets.bulb_icon} alt="" /></a>
                   
                    
                </div>

                <div className="card">
                    <p>this website is used th gemini api if you want to know more just click on me.. </p>
                    <a href="https://gemini.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=2024enIN_gemfeb&gad_source=1&gclid=CjwKCAjw4f6zBhBVEiwATEHFVnnD56mpvp39VDZDR2c2gPhUiF808jL4CAAoo2r3Wqhrmpk94KT22hoCPPEQAvD_BwE"><img src={assets.menu_icon} alt="" /></a>

                </div>

                <div className="card">
                    <p>The main source of this project is GEEKS FOR GEEKS </p>
                    <a href="https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=m&keyword=geeksforgeeks&matchtype=e&campaignid=20039445781&adgroup=147845288105&gad_source=1&gclid=CjwKCAjw4f6zBhBVEiwATEHFVqniJuYfn3eBFtUGe3vkD5bWYdzbGEVM1Uz2FvjxFFWyqMwo9ijmqhoCGaIQAvD_BwE"><img src={assets.code_icon} alt="" /></a>
                </div>

                
             </div>
            
            
            
            </>
            : <div className="result">
                <div className="result-tittle">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>

                </div>

                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading 
                    ? <div className="loader">
                        <hr />
                        <hr />
                        <hr />

                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>

                    }
                  
                </div>
            </div>
            }




          
          <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                   
                    <div >
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                       {input?  <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> :null}
                    </div>
                   
                </div>
            </div>


        </div>
    </div>
   )
}

export default Hero
