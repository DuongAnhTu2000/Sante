import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await axios.get(
      "https://625bf62850128c570209bacc.mockapi.io/user"
    );

    return response.data;
  } catch (err) {}
});

export const addUser = createAsyncThunk("user/add", async (user) => {
  try {
    console.log({ user });
    const res = await axios.post(
      "https://625bf62850128c570209bacc.mockapi.io/user",
      user
    );
    return res.data;
  } catch (err) {}
});
export const updateUser = createAsyncThunk(
  "user/update",
  async (dataUpdate) => {
    try {
      const response = await axios.put(
        `https://625bf62850128c570209bacc.mockapi.io/user/${dataUpdate.id}`,
        dataUpdate.newData
      );
      return response.data;
    } catch (err) {}
  }
);
export const deleteUser = createAsyncThunk("user/delete", async (id) => {
  try {
    const response = await axios.delete(
      `https://625bf62850128c570209bacc.mockapi.io/user/${id}`
    );
    return response.data;
  } catch (err) {}
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    isFetching: false,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isFetching = false;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isFetching = true;
      state.user = action.payload;
    });
    builder.addCase(addUser.pending, (state) => {
      state.isFetching = false;
    });

    builder.addCase(updateUser.pending, (state) => {
      state.isFetching = false;
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      state.isFetching = true;
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.isFetching = false;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.isFetching = true;
    });
  },
});

export const { userReducer } = userSlice.actions;
export default userSlice.reducer;
