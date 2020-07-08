import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import AddTask from "../../components/AddTask/AddTask";
import FilterableTaskList from "../../components/FilterableTaskList/FilterableTaskList";
import ControlTaskList from "../../components/ControlTaskList/ControlTaskList";

function MainPage() {
  return (
    <Provider store={store}>
      <AddTask />
      <FilterableTaskList />
      <ControlTaskList />
    </Provider>
  );
}

export default MainPage;
