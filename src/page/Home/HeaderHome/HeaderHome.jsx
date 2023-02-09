import "./HeaderHome.scss";
import ModalPage from "../../../scss/component/ModalPage";
import { Link } from "react-router-dom";

function HeaderHome() {
  return (
    <div className="home--header">
      <div className="home--header__left">
        <Link itemProp="url" to="/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook-f" />
        </Link>
        <Link itemProp="url" to="/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </Link>
        <Link itemProp="url" to="/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </Link>
      </div>
      <div className="home--header__center">
        <span>Free deliveries worldwide! For more info click &nbsp; </span>
        <Link to="/">
          <span>Here</span>
        </Link>
      </div>
      <div className="home--header__right">
        <div className="home--header__right__wishlist">
          <Link to="/admin"  style={{ textDecoration: "none" }}>
            <span className="header--text">
              Admin
            </span>
          </Link>
        </div>
        <div className="home--header__right__wishlist">
          <span className="lnr lnr-heart" />
          <span className="header--text">Wishlist (0)</span>
        </div>
        <ModalPage className="btn--login" />
      </div>
    </div>
  );
}

export default HeaderHome;
