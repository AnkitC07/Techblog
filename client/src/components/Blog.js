import React from 'react'
import { useLocation } from 'react-router-dom'
import "../Design/blog.css"

const Blog = () => {
  const location = useLocation()

  const state = location.state
 
  console.log(state)
  return (
    <div className='blog-body'>
        <div className="container">
            <div className="blog-title">

                {state.title}
       
            </div>
            <div className="header">
                <div className="blog-header-prof"><img src="" alt="" /></div>
                <div className="blog-header-name">{state.user}</div>
                <div className="blog-header-date">{state.date.substring(0,10)}</div>
            </div>
            <div className="blog-image">
              <img src={"/upload/"+state.img} alt="" />
            </div>
            <div className="post">
                {state.des}
            </div>
        </div>
    </div>
  )
}

export default Blog