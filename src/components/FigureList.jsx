import React from 'react'
import '../assets/css/figureList.css'
import Figure from './Figure'

export default function FigureList() {
  return (
    <ul className='figureList'>
        <li>
          <figure>
            <blockquote>
              Brilliant idea to replace knowledge bases 😱
              <br />
              Brilliant idea to replace knowledge bases 😱
              <br />
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
        </li>
        <li>
          <figure>
            <blockquote>
              Brilliant idea to replace knowledge bases 😱
              <br />
              Brilliant idea to replace knowledge bases 😱
              <br />
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
        </li>
        <li><Figure/></li>
    </ul>
  )
}
