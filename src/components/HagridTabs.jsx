import React from 'react'
import { useState } from 'react'
import '../assets/css/hagridTabs.css'

export default function HagridTabs() {

    const [indexTab, setIndexTab] = useState(1);

    const Open = (index) => {
        setIndexTab(index)
    }

  return (
    <div className='hagridTabs'>
        <img src="scribble-10.svg" alt="scrible" className='img-left' />
        <h2>Powerful and Simple. Gets things done!</h2>
        <h3>The hagrid dashboard puts everything you need to manage your QnA, at your fingertips.</h3>
        {/* Tab menu */}
        <div className='tab'>
            <button className={indexTab === 1 ? "tablink tablink-active" : "tablink"} onClick={()=>Open(1)}>Respond and Connect</button>
            <button className={indexTab === 2 ? "tablink tablink-active" : "tablink"} onClick={()=>Open(2)}>Make it your Own</button>
            <button className={indexTab === 3 ? "tablink tablink-active" : "tablink"} onClick={()=>Open(3)}>Stay in Control</button>
        </div>
        {/* Tab content */}
        <div className={indexTab === 1 ? "tabcontent-active" : "tabcontent"}>
            <video src="clip-1.mp4" autoPlay loop></video>
        </div>
        <div className={indexTab === 2 ? "tabcontent-active" : "tabcontent"}>
            <video src="clip-2.mp4" autoPlay loop></video>
        </div>
        <div className={indexTab === 3 ? "tabcontent-active" : "tabcontent"}>
            <video src="clip-3.mp4" autoPlay loop></video>
        </div>
        <p>Answer questions privately or notify users (even after they have left), and post rich replies to questions</p>
    </div>
  )
}
