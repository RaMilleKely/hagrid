import React from 'react'
import '../assets/css/hagridface.css'

export default function Hagridface() {
  return (
    <div className='hagridface'>
        <div className='profil'>
            <img src="vinod.jpg" alt="vinod" className='pdp'/>
            <img src="mark-vinod.svg" alt="mark-vinod" className='mark-vinod'/>
        </div>
        <div className='texte'>
            <div className='nindo'>
                <p>
                    Use my experience in transforming websites for conversion, and lessons from across 100s of websites. In 15 minutes, I’ll evaluate your website and set you up to win.
                </p>
                <img src="quotes.svg" alt="quotes" />
            </div>
            <button>Schedule a call with me</button>
        </div>
    </div>
  )
}
