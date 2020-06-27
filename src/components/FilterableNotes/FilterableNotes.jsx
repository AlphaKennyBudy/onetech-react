import React, { useState } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import NotesList from "../NotesList/NotesList";
import AddNote from "../AddNote/AddNote";

import API from "../../api";

import "./FilterableNotes.css";

function FilterableNotes(props) {
  const [filterText, setFilterText] = useState("");
  const [noteText, setNoteText] = useState("");

  const addNote = async () => {
    if (noteText !== "") {
      await fetch(API, {
        method: "POST",
        body: JSON.stringify({
          title: "NewNote",
          body: noteText,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => props.onNotesChange([json, ...props.notes]));
    }
  };

  return (
    <div className="FilterableNotes">
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <AddNote
        note={noteText}
        onNoteTextChange={setNoteText}
        onAddNote={addNote}
      />
      <NotesList filterText={filterText} notes={props.notes} />
    </div>
  );
}

export default FilterableNotes;
