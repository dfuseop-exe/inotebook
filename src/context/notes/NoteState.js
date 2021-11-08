import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {

    const notesInitial = [
        
        {
          "_id": "6188ebh618deda5d92icea1957",
          "title": "Mango juice",
          "description": "i have to drink mango juice",
          "tag": "helth",
          "date": "2021-11-08T09:18:25.153Z",
          "__v": 0
        },
        {
          "_id": "618d8eb61q8deda5d92cea1957",
          "title": "Mango juice",
          "description": "i have to drink mango juice",
          "tag": "helth",
          "date": "2021-11-08T09:18:25.153Z",
          "__v": 0
        },
        {
          "_id": "6188eb618deda5d92cea1s957",
          "title": "Mango juice",
          "description": "i have to drink mango juice",
          "tag": "helth",
          "date": "2021-11-08T09:18:25.153Z",
          "__v": 0
        },
        {
          "_id": "6188ewb618d6eda5d92cea1957",
          "title": "Mango juice",
          "description": "i have to drink mango juice",
          "tag": "helth",
          "date": "2021-11-08T09:18:25.153Z",
          "__v": 0
        },
        {
          "_id": "6188eb618de2dea5d92cea1957",
          "title": "Mango juice",
          "description": "i have to drink mango juice",
          "tag": "helth",
          "date": "2021-11-08T09:18:25.153Z",
          "__v": 0
        },
        {
          "_id": "6188eb618dedra5d929cea1957",
          "title": "Mango juice",
          "description": "i have to drink mango juice",
          "tag": "helth",
          "date": "2021-11-08T09:18:25.153Z",
          "__v": 0
        },
        {
          "_id": "6188eb2618dqda5yd92cea1957",
          "title": "Mango juice",
          "description": "i have to drink mango juice",
          "tag": "helth",
          "date": "2021-11-08T09:18:25.153Z",
          "__v": 0
        },
        {
          "_id": "6188eb618ddeqda5d92cea1957",
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