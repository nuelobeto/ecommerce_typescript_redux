import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserType = {
  email: string;
  password: string;
};

type InitialStateType = {
  user: UserType;
};

const initialState: InitialStateType = {
  user: {
    email: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {
        email: "",
        password: "",
      };
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
