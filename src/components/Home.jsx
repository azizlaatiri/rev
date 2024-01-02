import React from 'react'
import './home.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const nav=useNavigate()
  return (
    <div classname="allposts">
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" aria-current="page" onClick={()=>{nav('/Create')}}>Create Post</a>
        </li>
        <li class="nav-item2">
          <a class="nav-link active" aria-current="page"  onClick={()=>{nav('/')}}>All Posts</a>
        </li>
    
    <li class="nav-item3">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="" type="submit">Search</button>
    </form>
    </li>
   

        
  
  
 
        
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}
