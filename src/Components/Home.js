import React, { useContext } from "react";
import notecontext from "../context/notes/noteContext"

export default function Home() {
  
  const context = useContext(notecontext)
  const {notes , setnotes} = context;
  return (

    <div  style={{fontFamily:'Comfortaa'}}>
      <div className="container my-3">
        <h2 style={{ fontSize : "40px"}}>Create New Note</h2>
        <form className=" my-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="container my-3">
        <h2 style={{ fontSize : "40px"}}>Your Notes</h2>
        {notes.map((notes)=>{
          return notes.title;
        })}
      </div>
    </div>
  );
}
