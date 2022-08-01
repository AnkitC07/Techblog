import React,{useState,useEffect,useReducer} from 'react'
import "../Design/topbar.css";
import logo from "../Design/icons8-cyborg.svg"
import {Link} from "react-router-dom";
    
    const Topbar = () => {
      const [ firstName, setFirstName ] = useReducer(x=>x+1,0);
      useEffect(()=>{
        
      },[firstName])

     
      return (
        <div className='top'>
          <div className='top-logo'>
            <img src={logo} alt="" />
          </div>
          <div className='top-text'>
            <Link to="/">
             TECH BLOG
            </Link>
          </div>

          {sessionStorage.getItem("loginId")==null?
            <div className='top-login'>
            <Link to="/login" ><button >Login</button></Link>
            </div>
          :
            <div className='top-right'>
              <div className='top-addblog'> 
              <Link to="/addblog"><button>AddBlog</button></Link>
              </div>
              <div className='top-profile'> 
              <Link to="/profile"><button>Profile</button></Link>
              </div>
              <div className='top-login'>
              <Link to="/login" onClick={()=>{sessionStorage.clear(); setFirstName()}}><button  >Logout</button></Link>
              </div>
            </div>
          }
         
         
        </div>
      )
    }
    
    export default Topbar