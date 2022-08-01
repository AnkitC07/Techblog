import React,{useState} from 'react'
import "../Design/signup.css"
import {Link,useNavigate} from "react-router-dom";

const Login = () => {

    const [email,setemail]= useState("");
    const [password,setpassword]= useState("");
    let user;
    let navigate = useNavigate();
    const submitLoginForm = async (e)=>{

        e.preventDefault()
        await fetch("http://localhost:3001/login",{

        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({
                email: email,
                password: password
        })
             }).then((res)=>{
                return res.json()
            }).then((data) => {
                user=data;
                sessionStorage.setItem("loginId",user.data[0].id);
                console.log((user.data[0].id))
            }).catch((error)=>{
                console.log(error)
            })
            //After login navigating to Home Page
            if(user)
              navigate("/")  
    }

    // {user.length===0?null:user.map((key,val)=>{
    //     return(
    //         console.log(val.id)
    //         // sessionStorage.setItem("loginId",val.id)
    //     )
    // })}

  return (
    <div className='body'>
        <div className='form-container'>
            <div className='head-text'>
                LOGIN
            </div>
            <form onSubmit={submitLoginForm} >
                <div>
                    <input type="email" name='email' placeholder='Emial' required id='email'
                    value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                    />
                </div>
                <div>
                    <input type="password" name='password' placeholder='Password' required id='password'
                    value={password}
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }}
                    />
                </div>
                <div className='add-account-text'>
                    Don't have an account?  
                    <Link to="/signup">Signup</Link>
                </div>
                <button type='submit' >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login