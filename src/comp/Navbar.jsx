import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Category from './Category'
import Home from './Home'
import CatData from "../Data/CatData"

function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container  ">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
       {CatData.slice(0,5).map((a)=>(
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to={`/cat/${a}`}>{a}</Link>
      </li>
       ))}
      </ul>
      
    </div>
  </div>
</nav>


<Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/cat/:cid/' element={<Category/>}/>
</Routes>

    </>
  )
}

export default Navbar;