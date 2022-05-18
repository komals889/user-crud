import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
 
 
 
export default function Navbar( ) {
    
     
    
  return <div  >
          <nav className="navbar navbar-expand-sm navbar-light bg-primary">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">Task</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                      aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>                  
                  <div className="collapse navbar-collapse" id="navbarID">
                      <div className="navbar-nav">
                           <ul className='navbar-nav ms-auto'>
                            
                            
                                
                                 
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                                <Link className="nav-link active" aria-current="page" to='/add-user'>Add-User</Link>
                                {/* <Link className="nav-link active" aria-current="page" to='/class'>Class</Link>
                                <Link className="nav-link active" aria-current="page" to='/life'>Life</Link>
                             */}
                           </ul>
                           
                      </div>
                  </div>
              </div>
          </nav>
  </div>;
}
