import React from 'react'
import '../assets/css/card.css'

export default function Card() {
  return (
    <div className='card'>
        <img src='authentication.svg' alt='authentication'/>
        <div className='card-body'>
            <h4>Authenticated users</h4>
            <p>Socially authenticated posts. So no SPAM. Spend time on meaningful questions from high-intent visitors.</p>
        </div>
    </div>
  )
}