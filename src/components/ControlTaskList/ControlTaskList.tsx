import React from "react";
import FilterButton from "../FilterButton/FilterButton";
import { useDispatch } from "react-redux";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_FINISHED } from "../../actions/types";
import { setVisibilityFilter } from "../../actions";

function ControlTaskList() {
  const dispatch = useDispatch();
  return (
    <div className="ControlTaskList">
      <FilterButton onClick={() => dispatch(setVisibilityFilter(SHOW_ALL))}>
        All
      </FilterButton>
      <FilterButton onClick={() => dispatch(setVisibilityFilter(SHOW_ACTIVE))}>
        Active
      </FilterButton>
      <FilterButton
        onClick={() => dispatch(setVisibilityFilter(SHOW_FINISHED))}
      >
        Complete
      </FilterButton>
    </div>
  );
}

export default ControlTaskList;
