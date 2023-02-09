import "./NavbarHome.scss";
import { ReactComponent as Cart } from "../../assets/svg/Cart.svg";
import { Link} from "react-router-dom";
import { useEffect,useState } from "react";
import { useSelector } from 'react-redux';

function NavbarHome() {
  let countNumber = useSelector((state) => {
    return state.cart?.products[0]?.count || 0;
  });
  const [number, setNumber] = useState(countNumber);
  useEffect(() => {
    setNumber(countNumber);
  }, [countNumber]);
  return (
    <div className="navbar--home">
      <div className="navbar--home__icon">
        <Link itemProp="url" to="/">
          <img src={("https://sante.qodeinteractive.com/wp-content/uploads/2020/09/logo-big.png")} alt="logo" />
        </Link>
      </div>

      <div className="navbar--home__menu">
        <Link to="/">
          <span className="navbar--home__menu__list">Home</span>
        </Link>
        <Link to="/#">
          <span className="navbar--home__menu__list">Pages</span>
        </Link>
        <Link to="/shop">
          <span className="navbar--home__menu__list">Shop</span>
        </Link>
        <Link to="/#">
          <span className="navbar--home__menu__list">Store</span>
        </Link>
        <Link to="/#">
          <span className="navbar--home__menu__list">Blog</span>
        </Link>
        <Link to="/#">
          <span className="navbar--home__menu__list">Landing</span>
        </Link>
        <div className="cart">
            <Link itemProp="url" to="/cart">
              <div className="cart__button " >
                <Cart />
                <span className="cart--count">{number}</span>
              </div>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default NavbarHome;


