import React, { useEffect, useState } from "react";

import FilterableNotes from "../../components/FilterableNotes/FilterableNotes";
import API from "../../api";

import "./FilterableNotesPage.css";

function FilterableNotesPage() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await fetch(API)
        .then((response) => response.json())
        .then((data) => {
          setNotes(data);
        });
    }
    fetchData();
  }, []);
  return (
    <div className="FilterableNotesPage">
      <FilterableNotes notes={notes} onNotesChange={setNotes} />
    </div>
  );
}

export default FilterableNotesPage;
