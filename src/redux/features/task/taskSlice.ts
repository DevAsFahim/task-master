import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "p840ao32iw53eur93242y2",
      title: "Initialize frontend",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isComplete: false,
      priority: "High",
    },
    {
      id: "p840ao32iasfw322w53eur93242y2",
      title: "Create github repo",
      description: "Create branch",
      dueDate: "2025-11",
      isComplete: false,
      priority: "Medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
