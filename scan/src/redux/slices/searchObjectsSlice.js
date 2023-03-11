import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchObjectSearch = createAsyncThunk(
  "fetch/objectSearch",
  async (props) => {
    const response = await fetch(
      "https://gateway.scan-interfax.ru/api/v1/objectsearch",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        },
        body: JSON.stringify(props.body),
      }
    );
    const objects = await response.json();

    return objects;
  }
);

const initialState = {
  objects: null,
  status: null, // loading // success // error
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  extraReducers: {
    [fetchObjectSearch.pending]: (state) => {
      state.status = "loading";
    },
    [fetchObjectSearch.fulfilled]: (state, action) => {
      state.status = "success";
      state.objects = action.payload.items;
    },
    [fetchObjectSearch.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default requestSlice.reducer;
