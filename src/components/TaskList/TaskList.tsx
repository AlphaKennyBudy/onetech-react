import React from "react";
import { TaskType, TaskListType } from "../../actions/types";
import Task from "../Task/Task";

function TaskList({ tasks, toggleTask }: TaskListType) {
  return (
    <ul>
      {tasks.map((task: TaskType) => {
        return (
          <Task key={task.id} {...task} onClick={() => toggleTask(task.id)} />
        );
      })}
    </ul>
  );
}

export default TaskList;
