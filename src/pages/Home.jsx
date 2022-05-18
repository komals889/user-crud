import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserDetail from './UserDetail';

export default function Home() {
  const [users, setusers] = useState([])
  const [id, setid] = useState("")
  const [deleteid, setdeleteid] = useState("")
   
  const getUsers=async()=>{
     const {data}=await axios.get("http://localhost:5000/api/v1")
     console.log(data);
     setusers(data.result)
  }
  useEffect(() => {
      
    getUsers()

  }, [ ])
     const deleteUser=async()=>{
    const result=await axios.delete(`http://localhost:5000/api/v1/${deleteid}`)
    console.log(result);
    getUsers()
  }
  
  return <div className='container'>  
        <div className="row mt-5">
          <div className="col-sm-10 offset-1">
            <table className="table table-dark table-bordered">
               
                <thead>
                  <tr>
                    <th scope='col'>Sr.No</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>email</th>
                    <th scope='col'>username</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody>
                   {
                     users.map((item,index)=>(
                      <tr>
                      <th>{index+1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                      <td>
                        <Link className="btn btn-warning" to={`edit-user/${item._id}`} >Edit</Link>

                        <button className="btn btn-danger" data-bs-target="#delete" data-bs-toggle="modal" onClick={e=>(
                          setdeleteid(item._id)
                          )}>Delete</button>
                      </td>
                    </tr>
                     ))
                   }
                </tbody>
               
            </table>
             

          </div>
        </div>


                   {/* deleteData */}
                   <div className="modal fade" id="delete" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="deleteId" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Delete </h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                      <h1>Are you sure?</h1>

                      <button className="btn btn-danger" onClick={deleteUser} data-bs-dismiss="modal">Yes</button>
                      <button className="btn btn-success" data-bs-dismiss="modal">No</button>
                    
                  </div>
                   
                </div>
              </div>
            </div>
          

         

          
         
         
        
  </div>;
}
