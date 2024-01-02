import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'
export default function Fetch({onAddd}) {
  const[NewJeu,setNewJeu]=useState({
    author:"",
    category:"",
    language:""
})
const ajout=()=>{
    if(NewJeu.author.trim()==='' || NewJeu.category.trim()==='' || NewJeu.language.trim()===''){
        Swal.fire({
            icon:"error",
            title:"oops",
            text:"please fill in all fields"
        })
        return
    }
    onAddd(NewJeu)
    setNewJeu({
        author:"",
        category:"",
        language:""
    })
    Swal.fire({
        icon:'success',
        title:'post added',
        showConfirmButton: false,
        timer:1500
    })
}
  return (
    <div>
      <form>
      <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Author
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={NewJeu.author}
            onChange={(e) => setNewJeu({ ...NewJeu, author: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Category
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={NewJeu.category}
            onChange={(e) => setNewJeu({ ...NewJeu, category: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Language
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={NewJeu.language}
            onChange={(e) => setNewJeu({ ...NewJeu, language: e.target.value })}
          />
          <button className="btn btn-primary" type="button" onClick={ajout}>
          Add Post
        </button>

        </div>
      </form>
    </div>
  )
}
