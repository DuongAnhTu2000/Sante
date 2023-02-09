import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const initialState = {
  products: items,
  quantity: items?.length ?? 0,
  totalPrice: 0,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {

    addtoCart: (state, action) => {
      let itemList = JSON.parse(localStorage.getItem('cartItems')) || []
      // check item has been exist in cart
      const matchItemIndex = itemList?.findIndex(item => item.id === action.payload.id)
      console.log('matchItemIndex,itemList', matchItemIndex, itemList)
      // if cart empty,push item to array
      if (matchItemIndex === -1) {
        itemList.push(action.payload)
      }
      // if item has been exist,update count
      else {
        itemList[matchItemIndex].count += +action.payload.count
      }
      state.products = itemList
      localStorage.setItem("cartItems", JSON.stringify(itemList));
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter((item) => item.id !== action.payload);
      state.products = removeItem;
      localStorage.setItem("cartItems", JSON.stringify(state.products));
      return state
    },
    decreaseQuantity: (state, action) => {
      state.products.forEach((item, index) => {
        if (item.id === action.payload.id) {
          if (item.count < 1) {
            return
          } else if (item.count === 0) {
            
            state.products = removeItem;

          }
          item.count -= 1
          item.totalPrice = item.count * item.price
        }
      })
      localStorage.setItem("cartItems", JSON.stringify(state.products));
    },
    increaseQuantity: (state, action) => {
      state.products.forEach((item, index) => {
        if (item.id === action.payload.id) {
          item.count += 1
          item.totalPrice = item.count * item.price
        }
      })
      localStorage.setItem("cartItems", JSON.stringify(state.products));
    },

  },

})

export const { addtoCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  getToCart,
} = cartSlice.actions;
export default cartSlice.reducer;