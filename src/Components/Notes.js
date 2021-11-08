import React, { useContext } from "react";
import notecontext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(notecontext);
  const { notes, setnotes } = context;

  return (
    <div className="container my-3">
      <h2 style={{ fontSize: "40px" }}>You Notes</h2>
      <div className="row ">
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </div>
  );
}
