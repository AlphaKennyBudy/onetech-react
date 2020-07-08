import { VisibilityFilters } from "../actions";
import { SET_VISIBILITY_FILTER } from "../types/types";

const filterReducer = (
  state: string = VisibilityFilters.SHOW_ALL,
  action: any
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
