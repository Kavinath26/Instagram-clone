import React, { useEffect, useState } from 'react'

function Posts() {

    const [posts,setPosts]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/posts')
        .then((data)=>data.json())
        .then((data=>setPosts(data)))
        .catch(err=>console.log(err))
    },[])


  return (
    <div className='d-flex justify-content-center'>
        {posts.length > 0 ?(
           <div>
            {posts.map((post)=>
                <div key={post.id} className='my-3'>
                    <div className='d-flex'>
                        <img className='dp rounded-circle' src={post.user.profile_pic} alt='profile pic'/>
                        <h5 className='name'>{post.user.username}</h5>
                    </div>
                    <img className='image' src={post.image} alt="" />
                    <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                    </div>
                    <div>
                        <b>{post.likes} Likes</b>
                        <p className='caption'>{post.caption}</p>       
                    </div>
                </div>
            )}
           </div>
        ):(
           <div>Loading page</div>
        )
          
        }
    </div>
  )
}

export default Posts