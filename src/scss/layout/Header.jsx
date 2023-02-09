import "./Header.scss";
import ModalPage from "../component/ModalPage";
import { ReactComponent as Cart } from "../../page/assets/svg/Cart.svg";
import { ReactComponent as Option } from "../../page/assets/svg/Option.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
function Header() {
  let countNumber = useSelector((state) => {
    let totalCount = 0;
    state.cart.products.forEach((product) => {
      totalCount += product.count;
    });
    return totalCount || 0;
  });
  const [number, setNumber] = useState(countNumber);
  useEffect(() => {
    setNumber(countNumber);
  }, [countNumber]);
  return (
    <div className="header--container">
      <div className="header--container__left">
        <Link itemProp="url" rel="home" to="/">
          <img
            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/logo-home5-2.png"
            alt="logo"
            itemProp=""
          ></img>
        </Link>
      </div>
      <div className=".navbar--home__menu header--container__center">
        <Link to="/">
          <span className="navbar--home__menu__list">Home</span>
        </Link>
        <Link to="#">
          <span className="navbar--home__menu__list">Pages</span>
        </Link>
        <Link to="/shop">
          <span className="navbar--home__menu__list">Shop</span>
        </Link>
        <Link to="#">
          <span className="navbar--home__menu__list">Store</span>
        </Link>
        <Link to="#">
          <span className="navbar--home__menu__list">Blog</span>
        </Link>
        <Link to="#">
          <span className="navbar--home__menu__list">Landing</span>
        </Link>
      </div>
      <div className="header--container__right">
      <div className="home--header__right__wishlist">
          <Link to="/admin"  style={{ textDecoration: "none",color: "#313529" }}>
            <span className="header--text">
              Admin
            </span>
          </Link>
        </div>
        <ModalPage />
        <div className="navbar--home__menu">
          <div className="cart">
            <Link itemProp="url" to="/cart">
              <div className="cart__button">
                <Cart />
                <span className="cart--count">{number}</span>
              </div>
            </Link>
          </div>
        </div>
        <Option style={{ cursor: " pointer" }} />
      </div>
    </div>
  );
}

export default Header;
