import React from "react";
import Note from "../Note/Note";

import "./NotesList.css";

function NotesList(props) {
  return (
    <div className="NotesList">
      {props.notes
        ? props.notes
            .filter((item) => item.body.includes(props.filterText))
            .map((item) => <Note note={item} key={item.id} />)
        : "Nothing to display"}
    </div>
  );
}

export default NotesList;
