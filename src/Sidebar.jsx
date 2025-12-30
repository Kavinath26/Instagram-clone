import React from 'react'

function Sidebar() {
  return (
    <div className='m-3'>
      <div className='position-fixed top-0 d-flex flex-column gap-3 mt-3'>
        <img className="Insta-text" src="/src/assets/Instagramtext.png" alt="" />
        <div><i class="bi bi-house-door"></i>Home</div>
        <div><i class="bi bi-search"></i>Search</div>
        <div><i class="bi bi-compass"></i>Explore</div>
        <div><i class="bi bi-play-btn"></i>Reels</div>
        <div><i class="bi bi-chat-dots"></i>Message</div>
        <div><i class="bi bi-heart"></i>Notification</div>
        <div><i class="bi bi-plus-square"></i>create</div>
        <div><i class="bi bi-person-circle"></i>Profile</div>
      </div>
      <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div><i class="bi bi-threads"></i>Threads</div>
        <div><i class="bi bi-list"></i>More</div>
      </div>
    </div>
  )
}

export default Sidebar