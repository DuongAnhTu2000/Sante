import './MainDetail.scss';
import MainDetail from './MainDetail';
import Header from "../../scss/layout/Header";
import BreadCrumb from "../../scss/layout/BreadCrumb";
import Footer from "../../scss/layout/Footer";
import React, { useState } from 'react';

function ProductDetail() {
    const [title] = useState({
        title: "Scrub",
    });
    return ( 
        <div>
            <Header  />
            <BreadCrumb title={title.title} />
            <MainDetail  />
            <Footer />
        </div>
     );
}

export default ProductDetail;