import React from 'react'
import { useNavigate } from 'react-router-dom'
import Fetch from './Fetch';
import exampleBlogData from '../database/Data'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Create() {
  const [Jeu,setJeu]= useState(exampleBlogData)
  const ajout=(NewJeu)=>{
      const Update=[...Jeu,{...NewJeu,id:Jeu.length+1}]
      setJeu(Update)
  }
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
<div className="d-flex flex-row">
{Jeu.map((player)=>(
        <div class="card mb-3"  style={{maxWidth: "540px"}}>
            
        <div class="row g-0">
          <div class="col-md-4">
            
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{player.author}</h5>
              <p>{player.title}</p>
              <p>{player.category}</p>
              <p>{player.language}</p>
              <p>{player.country}</p>
            

              <p class="card-text"> {player.published_at}</p>
              
              <p class="card-text"><small class="text-body-secondary"></small></p>
            </div>
          </div>
        </div>
      </div>
      ))
      
      
      }
          </div>
          <Fetch onAddd={ajout}/>
    </div>
  )
}
