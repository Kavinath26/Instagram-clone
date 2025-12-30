import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'

function Profile() {

    const [profile,setProfile]=useState(null)

    const [followers,setFollowers]=useState([])

    const [unfollowed,setUnfollowed]=useState(0)

    useEffect(()=>{
        axios.get("http://localhost:8000/profile")
        .then(data=>setProfile(data.data))
        .catch(err=>console.log(err))

        axios.get("http://localhost:8000/followers")
        .then(data=>setFollowers(data.data))
        .catch(err=>console.log(err))
    },[unfollowed])

    function HandleOnChange(e){
        setProfile((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const handleUpdate=async()=>{
        axios.put("http://localhost:8000/profile",profile)
        .then(console.log("done"))
        .catch(err=>console.log(err))
    }

    const handleunfollow=async(id)=>{
        axios.delete(`http://localhost:8000/followers/${id}`)
        .then(alert('unfollowed'))
        .then(setUnfollowed(!unfollowed))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        {profile?(
            <div className='proname'>
               <img src={profile.profile_pic} alt="" className='rounded-circle profile'/>
               <h5>{profile.username}</h5>
               <input type="text"
                   value={profile.username}
                   name="username"
                   className='form-control w-50 m-4'
                   onChange={HandleOnChange}
                />

               <input type="text" 
                   name="profile_pic" 
                   value={profile.profile_pic}
                   className='form-control w-50 m-4'
                   onChange={HandleOnChange}
                />

            <button className='btn btn-primary' onClick={handleUpdate}>
                Update
            </button>

            </div>
        ):(<div>Loading...</div>)}
        <b>Followers</b>
        {followers.length>0?(
            followers.map((follower)=>
                <div key={follower.id} className='d-flex my-2'>
                    {follower.username}
                    <button onClick={()=>{handleunfollow(follower.id)}} className='btn btn-secondary ms-auto'>Unfollow</button>
                </div>
            )
        ):(
            <div>Loading</div>
        )}
    </div>
  )
}

export default Profile