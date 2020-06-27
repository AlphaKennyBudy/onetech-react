import React from "react";

import "./AddNote.css";

function AddNote(props) {
  return (
    <div className="AddNote">
      <textarea
        className="AddNote__TextArea"
        name="note"
        id="note"
        rows="10"
        placeholder="Enter your notes here..."
        onChange={(e) => props.onNoteTextChange(e.target.value)}
      >
        {props.noteText}
      </textarea>
      <button onClick={props.onAddNote} className="AddNote__Btn">
        Add
      </button>
    </div>
  );
}

export default AddNote;
