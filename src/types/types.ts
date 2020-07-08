export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_ACTIVE = "SHOW_ACTIVE";
export const SHOW_FINISHED = "SHOW_FINISHED";

export type TaskType = {
  id: number;
  task: string;
  completed: boolean;
};

export type TaskListType = {
  tasks: TaskType[];
  toggleTask: (id: number) => { type: string; id: number };
};

export type FilteredTaskType = {
  onClick: () => void;
  completed: boolean;
  task: string;
};
