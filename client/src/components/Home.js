import React,{useEffect,useState} from 'react'
import '../Design/home.css'
import Card from './Card'

const Home = () => {
  const [post,setPost]= useState("");
  
  useEffect( ()=>{
    async function fetchApi(){
      await fetch("http://localhost:3001/getblogs").then((res)=>{return res.json()}).then((data)=>{setPost(data.data);console.log(data.data)}).catch((err)=>console.log(err))
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
        <Card key={index} id={item.id} user={item.name} date={item.date} title={item.title} description={item.description} img={item.url} />
      )
    })}
        </div>
      </div>
    </div>  
    </>
  )
}

export default Home
