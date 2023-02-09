import Header from '../../scss/layout/Header';
import BreadCrumb from '../../scss/layout/BreadCrumb';
import CartEmpty from "./CartEmpty";
import ListCart from './ListCart';
import Footer from '../../scss/layout/Footer';
import React from 'react';
import { useState } from 'react';
import {useSelector} from "react-redux";
function Cart() {
    const products = useSelector((state) => state.cart.products)
    const [title] = useState({ 
        cart: 'Cart',
        title: 'Return to shop',
    });
    return ( 
        <div>
            <Header />
            <BreadCrumb title={title.cart}/>
             {products.length > 0 ? <ListCart  /> : <CartEmpty  />}
            <Footer  /> 
        </div>
     );
}

export default Cart