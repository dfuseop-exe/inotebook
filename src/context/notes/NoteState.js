import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "6188eb3a8deda5d92cea1955",
          "title": "BGMI",
          "description": "ThisisBattlee",
          "tag": "game",
          "date": "2021-11-08T09:17:46.461Z",
          "__v": 0
        },
        {
          "_id": "6188eb618deda5d92cea1957",
          "title": "Mango juice",
          "description": "i have to drink mango juice",
          "tag": "helth",
          "date": "2021-11-08T09:18:25.153Z",
          "__v": 0
        }
      ]

      const [notes, setnotes] = useState(notesInitial)

    return(
        <noteContext.Provider value={{notes , setnotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
//className={`nav-link ${location.pathname ==="/about" ? "active" : ""}`}