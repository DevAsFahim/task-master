import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/features/counter/counterSlice";
import taskReducer from "@/redux/features/task/taskSlice";
import userReducer from "@/redux/features/user/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
