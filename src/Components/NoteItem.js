import React from "react";

export default function NoteItem(props) {
  const { note } = props;
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

          <i className="fas fa-trash-alt fa-2x mx-3 "></i>
          <i className="fas fa-edit fa-2x "></i>
        </div>
      </div>
    </div>
  );
}
