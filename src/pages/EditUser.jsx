import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,useHistory } from 'react-router-dom'

export default function EditUser() {
    let id=useParams().id
    const history=useHistory()
    const [userData, setuserData] = useState({
        name:"",
        email:"",
        username:""
    })
    const onSubmit=async(e)=>{
        e.preventDefault()
         await axios.put(`http://localhost:5000/api/v1/${id}`,userData)
        alert("user data edited")
        setTimeout(() => {

            
            history.push("/")
        }, 1000);
    }
    
    const loadData=async()=>{
        const {data}=await axios.get(`http://localhost:5000/api/v1/${id}`)
        // console.log(result);
        setuserData(data.result)
    }
    useEffect(()=>{
        onSubmit()
    })
    useEffect(()=>{
      loadData()
    },[])

  return (
    <div> 
        <div className="row">
            <div className="col-sm-6 offset-3">
                <div className="card mt-5">
                    <div className="card-header ">
                        Edit User
                    </div>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <input type="text" value={userData.name} required onChange={(e)=>setuserData({...userData,name:e.target.value})} className='form-control' placeholder='enter name'/><br />
                            <input type="text" value={userData.email}required onChange={(e)=>setuserData({...userData,email:e.target.value})} className='form-control' placeholder='enter email'/><br />
                            <input type="text" value={userData.username} required onChange={(e)=>setuserData({...userData,username:e.target.value})} className='form-control' placeholder='enter username'/><br />
                            <button className='btn btn-success w-100'>Edit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
