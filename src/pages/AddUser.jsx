import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AddUser({history}) {
    const [userData, setuserData] = useState({
        name:"",
        email:"",
        username:""
    })
    const onSubmit=async(e)=>{
        e.preventDefault()
        const result=await axios.post("http://localhost:5000/api/v1",userData)
        console.log(result);
        history.push("/")
    }
    useEffect(()=>{
        onSubmit()
    })
  return (
    <div> 
        <div className="row">
            <div className="col-sm-6 offset-3">
                <div className="card mt-5">
                    <div className="card-header ">
                        Add User
                    </div>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <input type="text" required onChange={(e)=>setuserData({...userData,name:e.target.value})} className='form-control' placeholder='enter name'/><br />
                            <input type="text" required onChange={(e)=>setuserData({...userData,email:e.target.value})} className='form-control' placeholder='enter email'/><br />
                            <input type="text" required onChange={(e)=>setuserData({...userData,username:e.target.value})} className='form-control' placeholder='enter username'/><br />
                            <button className='btn btn-success w-100'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
