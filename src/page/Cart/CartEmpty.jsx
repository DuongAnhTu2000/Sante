import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './CartEmpty.scss';
import ButtonStyle from '../../scss/component/ButtonStyle';
function CartEmpty() {
  const [title] = useState({
    title3: 'Your cart is empty',
    button: 'Return to shop',
  });
  return (
    <div className="main--container">
      <div className="paragraph--text">
        <div className="paragraph--wrap">
          <div className="paragraph--image">
            <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/section-title-icon-1.png" alt="" />
          </div>
          <div className="paragraph--wrap__content text--cart">
            <h2>{title.title3}</h2>
            <h6>Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula.</h6>
          </div>
        </div>
      </div>
      <Link to="/shop">
        <ButtonStyle type="button" title={title.button} />
      </Link>
    </div>
  );
}

export default CartEmpty;
