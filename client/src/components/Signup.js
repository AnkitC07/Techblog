import React, { useState } from 'react'
import "../Design/signup.css"
import {Link} from "react-router-dom";

const Signup = () => {

    const [user,setUser] = useState({
        name: "",email: "",password: ""
    });
 
    const handelSubmit = (e)=>{
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value
        setUser({...user,[name]:value});
    }

    const submitSignupform = async(e)=>{


        e.preventDefault()
        console.log("signup")

           await fetch("http://localhost:3001/signup",{

            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(user)
            }).then((res)=>{
                return res.json()
            }).then((data) => {
                console.log(data)
            }).catch((error)=>{
                console.log(error)
            })

            window.location.reload(false);
    }


  return (
    <div className='body'>
        <div className='form-container'>
            <div className='head-text'>
                Create Your Account
            </div>
            <form >
                <div>
                    <input type="text" name='name' placeholder='Full Name' id='name' 
                    value={user.name}
                    onChange={handelSubmit}
                    />
                </div>
                <div>
                    <input type="email" name='email' placeholder='Emial' id='email'
                    value={user.email}
                    onChange={handelSubmit}
                    />
                </div>
                <div>
                    <input type="password" name='password' placeholder='Password' id='password'
                    value={user.password}
                    onChange={handelSubmit}
                    />
                </div>  
                <div className='add-account-text'>
                    Already have an account?  
                    <Link to="/login">Login</Link>
                </div>
                <button type='submit' onClick={submitSignupform}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Signup