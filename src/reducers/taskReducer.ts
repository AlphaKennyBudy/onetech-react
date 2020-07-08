import { ADD_TASK, TOGGLE_TASK, TaskType } from "../actions/types";

const taskReducer = (state: TaskType[] = [], action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          completed: false,
        },
      ];
    case TOGGLE_TASK:
      return state.map((task: TaskType) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

export default taskReducer;
