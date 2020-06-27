import React from "react";

import "./Note.css";

function Note(props) {
  return <div className="Note">{props.note.body}</div>;
}

export default Note;
