import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, createUser } from "../services/userService";
import { User } from "../@types/common";

export const fetchUsersAsync = createAsyncThunk("user/fetchUsers", async () => {
    const response = await fetchUsers();
    return response;
});

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData: User) => {
      const response = await createUser(userData);
      return response;
  }
);

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch users';
      })
      // .addCase(createUserAsync.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(createUserAsync.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.users.push(action.payload.user);
      // })
      // .addCase(createUserAsync.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // });
  },
});
export default userSlice.reducer;
