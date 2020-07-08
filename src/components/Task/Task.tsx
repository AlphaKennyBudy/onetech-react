import React from "react";
import { FilteredTaskType } from "../../actions/types";

function Task({ onClick, completed, task }: FilteredTaskType) {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {task}
    </li>
  );
}

export default Task;
