import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"

export default function NoteItem(props) {
  const { note } = props;

  const context = useContext(noteContext);
  const { deleteNote } = context;
  
  return (
    <div style={{ width: "100%" }}>
      <div className="card m-2">
        <div className="card-body">
        <h3>Title :-</h3>
          <h5 className="card-title">
            {note.title}
          </h5>
          <h4>Description :-</h4>
          <p className="card-text">
              
            {note.description}
          </p>

          <i className="fas fa-trash-alt fa-2x mx-3 " onClick = {()=>{deleteNote(note._id)}}></i>
          <i className="fas fa-edit fa-2x "></i>
        </div>
      </div>
    </div>
  );
}
