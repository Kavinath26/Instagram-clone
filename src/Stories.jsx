import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Stories() {

  const [stories,setStories]=useState([])

  const navigate=useNavigate()

  let tot=0;

  useEffect(()=>{
        fetch('http://localhost:8000/story')
        .then((data)=>data.json())
        .then((data=>setStories(data)))
        .catch(err=>console.log(err))
    },[])
 
  return (
    <div className="d-flex gap-3 story">
      <div className='d-none'>{tot=stories.length}</div>
      {stories.length > 0 ?(
            stories.map((story)=>(
                <div key={story.id}>
                  <div className="gradient_border" onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
                  <img src={story.user.profile_pic} alt="" className='story-dp rounded-circle' />
                  </div>
                  <p className='text-truncate' style={{width:"50px", textAlign:"center"}}>{story.user.username}</p>
                </div>
            ))
        ):(
           <div>Loading</div>
        )}
    </div>
  )
}

export default Stories