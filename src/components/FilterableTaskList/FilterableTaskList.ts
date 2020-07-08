import { VisibilityFilters, toggleTask } from "../../actions";
import { connect } from "react-redux";
import TaskList from "../TaskList/TaskList";
import { TaskType } from "../../types/types";
import { Dispatch } from "redux";

function filterTaskList(tasks: TaskType[], filter: string) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return tasks;
    case VisibilityFilters.SHOW_ACTIVE:
      return tasks.filter((task: TaskType) => !task.completed);
    case VisibilityFilters.SHOW_FINISHED:
      return tasks.filter((task: TaskType) => task.completed);
    default:
      throw new Error("Unknown Filter: " + filter);
  }
}

const mapStateToProps = (state: {
  taskReducer: TaskType[];
  filterReducer: string;
}) => ({
  tasks: filterTaskList(state.taskReducer, state.filterReducer),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTask: (id: number) => dispatch(toggleTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
