import React, { useState,useEffect } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'

function Viewstory() {
    const {id,tot}=useParams();

    const[story,setStory]=useState(null)

    const navigate=useNavigate();

    useEffect(()=>{
            fetch('http://localhost:8000/story/'+id)
            .then((data)=>data.json())
            .then((data=>setStory(data)))
            .catch(err=>console.log(err))
        },[id])

    if(id>tot || id<=0){
        navigate('/');
    }

  return (
    <div>
        {story? <div className='d-flex justify-content-center align-items-center'>
            <Link to={'http://localhost:5173/story/'+(Number(id)-1)+'/'+tot}><i class="bi bi-arrow-left-circle-fill"></i></Link>
            <img src={story.image} alt="story" className='vh-100' />
            <Link to={'http://localhost:5173/story/'+(Number(id)+1)+'/'+tot}><i class="bi bi-arrow-right-circle-fill"></i></Link>
        </div>:
        <div>Loading</div>}
        </div>
  )
}

export default Viewstory