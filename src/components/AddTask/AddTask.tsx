import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions";

function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    if (!task.trim()) return;
    dispatch(addTask(task));
    setTask("");
  };
  return (
    <div className="AddTask">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add();
        }}
      >
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
