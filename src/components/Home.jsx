import React from 'react'
import './home.css'
import 'bootstrap/dist/css/bootstrap.css';export default function Home() {
    //should contain header you will find an exemple in the assets folder
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Create Post</a>
        </li>
        <li class="nav-item2">
          <a class="nav-link active" aria-current="page" href="#">All Posts</a>
        </li>
    
    <li class="nav-item3">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    </li>

        
  
  
 
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
