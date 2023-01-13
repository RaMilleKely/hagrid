import React from 'react'
import '../assets/css/figure.css'

export default function Figure() {
  return (
    <figure>
        <blockquote>
          Brilliant idea to replace knowledge bases 😱
        </blockquote>
        <figcaption>
            <img src="userpic.jpg" alt="user" />
            <div className='auteur'>
                <p className='username'>Stefan Wirth</p>
                <p className='usertag'>Product @NicheMates</p>
            </div>
        </figcaption>
    </figure>
  )
}
