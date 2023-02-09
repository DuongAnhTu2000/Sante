import { addtoCart } from "../../redux/cartSlice";
import "./AddToCart.scss";
import { useDispatch } from "react-redux";

function AddToCart({ product = {} }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    const newItem = {
      ...product,
      count: 1,
      totalPrice: 1 * product.price,
    };
    dispatch(addtoCart(newItem));
    console.log("them san pham ", newItem);
  };
  return (
    <>
      <button type="button" className="addToCart" onClick={handleAddToCart}>
        Add to cart
      </button>
    </>
  );
}

export default AddToCart;
