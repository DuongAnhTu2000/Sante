import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../redux/productSlice";
function Search() {
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  return <></>;
}

export default Search;
