import React,{useState,useEffect} from 'react'
import "../Design/addBlog.css"
const AddBlog = () => {

    const [user,setUser] = useState({
        title: "",description: "", uid:""
    });
    const [file,setFile] = useState([]);
    user.uid = sessionStorage.getItem("loginId")

    const handelSubmit = (e)=>{
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value
        setUser({...user,[name]:value});
    }

  
    // useEffect(()=>{
    //     const getImage= ()=>{
    //             if(file){
    //                 const data = new FormData();
    //                 data.append("file",file);

    //                 user.url="" //TODOs
    //             }
    //     }    
    //     getImage()
    // },[file])

    const submitform = async(e)=>{
        e.preventDefault()
            const data = new FormData();
            data.append("file",file);
            data.append("body",JSON.stringify(user));


        // console.log("Blog Post")
        // console.log(data.get("file"))


        // console.log(user);
        console.log("Data: ",data)
           await fetch("http://localhost:3001/addBlog",{
            method: "POST",
            body: data
            }).then((res)=>{
                return res.json()
            }).then((data) => {
                console.log("data:",data)
            }).catch((error)=>{
                console.log(error)
            })

            // window.location.reload(false);
    }


  return (
    <div className="rootbody">
        <div className='blog-container'>
                <form className='addblogform'  onSubmit={submitform} encType="multipart/form-data">
                    <div className='Title'>
                        <span>Title</span>
                        <input type="text" name='title' 
                        value={user.title} 
                        onChange={handelSubmit}/>
                    </div>
                        <div className='Image'>
                            <span>Image URL</span>
                            <input type="file" name="url" accept='image/*'
                            onChange={(e)=>setFile(e.target.files[0])} />
                        </div>
                    <div className='Description'>
                        <span>Description</span>
                        <input type="text" name='description' 
                        value={user.description}
                        onChange={handelSubmit}/>
                    </div>
                    <div className='blog-submit'>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default AddBlog