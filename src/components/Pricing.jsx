import React from 'react'
import '../assets/css/pricing.css'

export default function Pricing() {
  return (
    <div className='pricing'>
        <img src='scribble-stars.svg' alt='scribble-stars' className='img-center' />
        <h2>Unlimited everything always</h2> 
        <h3>One simple plan. No limits. Pay annually and save.</h3> 
        <div className='boxprice'>
            <div className="box">
                <p className='tilte'>Monthly</p>
                <p className='price'>$9.99 <span>/ month</span></p>
                <p className='article'>Billed monthly</p>
                <button>Try for Free</button>
            </div>
            <div className="box">
                <div className='popular'>MOST POPULAR</div>
                <img src="scribble-1.svg" alt="scribble-1" />
                <p className='tilte'>Monthly</p>
                <p className='price'>$7.99 <span>/ month</span></p>
                <p className='article'>Billed at $95.88 /year</p>
                <button>Try for Free</button>
            </div>
        </div>
    </div>
  )
}
