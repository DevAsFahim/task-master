import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "16PMB19Jz67mj1T4q7UsgBg",
      name: "Fahim",
    },
    {
      id: "16PMB19Jz34mj1T4q7UsgBg",
      name: "Abu Saleh",
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, actions: PayloadAction<IUser>) => {
      const userData = createUser(actions.payload);
      state.users.push(userData);
    },

    removeUser: (state, actions: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== actions.payload);
    },
  },
});

export const selectUser = (state: RootState) => state.user.users;

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
