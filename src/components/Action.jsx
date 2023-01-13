import React from 'react'
import '../assets/css/action.css'

export default function Action() {

  const posts = [
    {
      title : "How can I answer people's questions? How will they get the answers?",
      username : "Vinod Bollini",
      userpic : "unnamed.png",
      content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dignissimos libero deleniti iste temporibus! Ratione nulla enim quia, possimus, temporibus doloribus nesciunt deleniti quos rerum obcaecati expedita pariatur numquam libero!"
    }
  ]

  return (
    <div className='action'>
        <img src='scribble-5.svg' className='img-left' alt="scribble5" />
        <img src='scribble-4.svg' className='img-right' alt="scribble4" />
        <h2>See hagrid in action</h2> 
        <h3>Ask us anything you'd like, we're using hagrid to put this FAQ up</h3>    
        <div className='hagrid-blog'>
          <p className='watermark'>Powered by <b>hagrid</b></p>
            <div className='post-container'>
                <p>Ask us Anything</p>
                <input type="text" />
                <button>Post your question</button>
            </div>
            <div className='question-login'>
                <p>All Questions</p>
                <button>Login</button>
            </div>
            <div className='question-card'>
              <div className="title">How can I answer people's questions? How will they get the answers?</div>
              <div className="auteur">
                <img src="unnamed.png" alt="unnamed" className='userpic'/>
                <p className='username'>Vinod Bollini</p>
              </div>
              <div className="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur placeat porro similique minus esse tempore repudiandae amet ab cumque.
                Deleniti adipisci praesentium neque est ut error in quod hic! Modi?
              </div>
            </div>
            <div className='more-questions'>
              <button>Load more questions</button>
            </div>
        </div>   
    </div>
  )
}
