import React,{useState,useEffect} from 'react'
import '../Design/home.css'
import "../Design/profile.css"
import Card from './Card'


const Profile = () => {

  console.log('current URL 👉️', window.location.href);
  console.log('current Pathname 👉️', window.location.pathname);

    const [post,setPost] = useState('');
    const [img,setImg] = useState('');
    let id = sessionStorage.getItem("loginId");

 useEffect( ()=>{
    async function fetchApi(){
      await fetch("http://localhost:3001/profileblogs",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id:id})
      }).then((res)=>{return res.json()}).then((data)=>{setPost(data.data)}).catch((err)=>console.log(err))
    }

    // async function getimg(){
    //   let response = await fetch("http://localhost:3001/getimg").then((res)=>{return res}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
    //   console.log(response);
    // }

    // getimg()

    fetchApi()
  },[])

  return (
    <>
      <div className="home-container">
      <div className="home-center">
        <div className="home-blog">
         
    {post.length===0?null:post.map((item,index)=>{
      return(
        <Card key={index} user={item.name} date={item.date} title={item.title} description={item.description} img={item.url} />
      )
    })}
        </div>
      </div>
    </div>  
    </>

    // 
  )
}

export default Profile
