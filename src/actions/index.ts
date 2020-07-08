import {
  ADD_TASK,
  TOGGLE_TASK,
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_FINISHED,
} from "../types/types";

let id = 0;

export function addTask(task: string) {
  return { type: ADD_TASK, id: id++, task };
}

export function toggleTask(id: number) {
  return { type: TOGGLE_TASK, id };
}

export function setVisibilityFilter(filter: string) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export const VisibilityFilters = {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_FINISHED,
};
