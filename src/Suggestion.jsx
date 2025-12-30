import axios from 'axios'
import React, { useState,useEffect } from 'react'

function Suggestion() {

  const [profile,setProfile]=useState(null)
  const [suggestions,setSuggestions]=useState([])

  useEffect(()=>{
          fetch('http://localhost:8000/profile')
          .then((data)=>data.json())
          .then((data=>setProfile(data)))
          .catch(err=>console.log(err))
      },[])

  useEffect(()=>{
          fetch('http://localhost:8000/Suggestion')
          .then((data)=>data.json())
          .then((data=>setSuggestions(data)))
          .catch(err=>console.log(err))
      },[])

    const handlefollow=async(id,username)=>{
      axios.post("http://localhost:8000/followers",{"id":id,"username":username})
      .then(alert('Followed'))
      .catch(err=>console.log(err))
    }

  return (
    <div>
      <div className='suggestion w-75 m-4'>
      {profile ?(
        <div className='d-flex'>
          <img className='dp rounded-circle' src={profile.profile_pic} alt='profile pic'/>
          <h5 className='name'>{profile.username}</h5>
          <small className='ms-auto text-primary'>Switch</small>
        </div>):(
        <div>Loading page</div>
        )}
        <br />
        <div className='d-flex'>
          <p>Suggested for you</p>
          <b className='ms-auto'>See All</b>
        </div>
        <div>
           {suggestions.length > 0 ?(
           <div>
            {suggestions.map((suggestion)=>
                <div key={suggestion.id} className='my-2'>
                    <div className='d-flex'>
                        <img className='dp rounded-circle' src={suggestion.profile_pic} alt='profile pic'/>
                        <h5 className='name'>{suggestion.username}</h5>
                        <a onClick={()=>handlefollow(suggestion.id,suggestion.username)} className='text-primary ms-auto'>Follow</a>
                    </div>
                </div>
            )}
           </div>
        ):(
           <div>Loading</div>
        )
          
        }
        </div>

      </div>
    </div>
  )
}

export default Suggestion