import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk('product/getProduct', async () => {

  try {
    const response = await axios.get("https://625bf62850128c570209bacc.mockapi.io/product")
    return response.data

  } catch (err) {
    console.log(err)
  }
})
export const addProduct = createAsyncThunk("product/add", async (item) => {
  try {
    const res = await axios.post("https://625bf62850128c570209bacc.mockapi.io/product", item)
    return res.data;

  } catch (err) {
    console.log(err)
  }
})

export const updateProduct = createAsyncThunk("product/update", async (update) => {
  try {
    const res = await axios.put(`https://625bf62850128c570209bacc.mockapi.io/product/${update.id}`, update.newData)
    return res.data

  } catch (err) {
    console.log(err)
  }
});

export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
  try {
    const res = await axios.delete(`https://625bf62850128c570209bacc.mockapi.io/product/${id}`);
    return res.data;

  } catch (err) {
    console.log(err)
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    isFetching: false,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.isFetching = false;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isFetching = true;
      state.product = action.payload;
    });
    builder.addCase(addProduct.pending, (state, action) => {
      state.isFetching = false;
      console.log("false");
    })
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isFetching = true;
    })

    builder.addCase(updateProduct.pending, (state, action) => {
      state.isFetching = false;
    })
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      console.log(state)
      state.isFetching = true;
    })
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.isFetching = false;
    })
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isFetching = true;
    });
  }
})

export const {
  productReducer
} = productSlice.actions;

export default productSlice.reducer;