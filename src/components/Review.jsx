import React from 'react'
import profile from '../assets/profile.jpg'

function Review({name,feedback,star}) {
  return (
    <article className='reviewbox'>
      <div className='reviewrate'>
        <p  style={{fontSize:"1rem"}}>{star}</p>
      </div>
      <div style={{display:"inline-flex", justifyContent:"flex-start", alignItems:"center"}}>
        <img src={profile} className='profile'/>
        <p style={{fontWeight:"bold"}}>{name}</p>
      </div>
      <p style={{fontFamily:"Karla", fontSize:"0.8rem"}}>{feedback}</p>
    </article>
  )
}

export default Review;