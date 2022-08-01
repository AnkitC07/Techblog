import React from 'react'
import '../Design/home.css'
import {Link} from "react-router-dom";
import img from "../Design/001.jpg"


const Card =  (props) => {


  const handelDelete = async()=>{
    alert("delete")
    await fetch(`http://localhost:3001/deleteblogs?id=${props.id}`)
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data)})
    .catch((err)=>console.log(err))

    window.location.reload(false)
  }

// const name = props.user
const data = {
  user: props.user,
  title: props.title,
  date: props.date,
  img: props.img,
  des: props.description
};
console.log(props.id)
  return (
    
  
    <div className="blog-center">
     <div className="blog-header">
       <div className="blog-header-prof"><img src={img} alt="" /></div>
       <div className="blog-header-name">{props.user.toUpperCase()}</div>
       <div className="blog-header-date">{props.date.substring(0,10)}</div>
     </div>

     {sessionStorage.getItem("loginId")==null?"":window.location.pathname=="/profile"? 
       <div className="delete" >
        <button className='fa fa-trash' onClick={()=>{handelDelete()}}></button>
       </div>:""
      }
       
       
     <div className="blog-img">
       <img src={"/upload/"+props.img} alt="" />
     </div>
     <div className="blog-main-title">
        {props.title.toUpperCase()}      
     </div>
     <div className="blog-main-text" >
       <p>
        {/* {console.log(props.title)} */}
        {props.description.substring(0,125)+"..."}<Link to="/Blog" state={data} className='blog' >Read more</Link>
       </p>
     </div>
   </div>
  )
}


export default Card