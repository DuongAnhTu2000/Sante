import "./ListCart.scss";
import ButonStyle from "../../scss/component/ButtonStyle";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../redux/cartSlice";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function ListCart() {
  const products = useSelector((state) => state.cart.products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = products.reduce((total, cur) => {
      return total + cur.price* cur.count;
    }, 0);
    setTotalPrice(totalPrice);
  }, [products]);

  const dispatch = useDispatch();
  const handleDecrease = (id, price) => {
    dispatch(
      decreaseQuantity({
        id,
        price,
      })
    );
  };
  const handleIncrease = (id, price) => {
    dispatch(
      increaseQuantity({
        id,
        price,
      })
    );
  };
  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };
  // const listItem = JSON.parse(localStorage.getItem("cartItems"));
  const [title] = useState({
    title: "Proceed to checkout",
  });

  return (
    <div className="cart--container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container={true} spacing={0} columns={10}>
          <Grid item xs={6}>
            <Item>
              {products.map((product) => (
                <div className="cart--wrap" key={product?.id}>
                  <form>
                    <div className="table--cart">
                      <div className="product">
                        <div className="table--cart__items">
                          <div
                            className="product--remove"
                            onClick={() => {
                              handleDelete(product?.id);
                            }}
                          >
                            <span className="lnr lnr-cross"></span>
                          </div>
                          <div className="product--image">
                            <img src={product.image} alt=""></img>
                          </div>
                          <div className="product--name">
                            <Link
                              to="/detail"
                              style={{ textDecoration: "none" }}
                            >
                              <h5>{product.name}</h5>
                            </Link>
                          </div>
                          &emsp; &emsp; &emsp;
                          <div className="product--quantity">
                            <input
                              type="text"
                              name="quantity"
                              value={product?.count}
                              size="4"
                              placeholder=""
                              className="input--text"
                            ></input>
                            <span
                              className="quantity--plus"
                              onClick={() => {
                                handleDecrease(product?.id, product.price);
                              }}
                            >
                              <span className="lnr lnr-chevron-down"></span>
                            </span>
                            <span
                              className="quantity--minus"
                              onClick={() => {
                                handleIncrease(product?.id, product.price);
                              }}
                            >
                              <span className="lnr lnr-chevron-up"></span>
                            </span>
                          </div>
                          &emsp; &emsp;
                          <div className="product--total">
                            <span>${product.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              ))}
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <div className="cart--totals">
                <h2>Cart Totals</h2>
                <table className="totals--price">
                  <tbody>
                    <tr className="cart--subtotal">
                      <h5>Subtotal</h5>
                      <td className="subtotal">
                        <span>${totalPrice}</span>
                      </td>
                    </tr>
                    <tr className="shipping">
                      <h5>Shipping</h5>
                      <td className="option--delivery">
                        <ul>
                          <li>
                            <input
                              type="radio"
                              name="delivery"
                              defaultChecked={true}
                            ></input>
                            <label>Flat rate</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="delivery"
                              defaultChecked={true}
                            ></input>
                            <label>Free shipping</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="delivery"
                              defaultChecked={true}
                            ></input>
                            <label>Local pickup</label>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="order--total">
                      <h5>Total</h5>
                      <h5>${totalPrice}</h5>
                    </tr>
                    <tr className="checkout">
                      <ButonStyle
                        className="btn--checkout"
                        title={title.title}
                        style={{ width: "100%" }}
                      />
                    </tr>
                  </tbody>
                </table>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ListCart;
