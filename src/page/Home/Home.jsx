import HeaderHome from "./HeaderHome/HeaderHome";
import NavbarHome from "./Navbar/NavbarHome";
import SliderJS from "./SliderJS/SliderJS";
import Swiper from "./Swiper/Swiper";
import Categories from "../../scss/layout/Categories";
import Introduction from "./Introduction/Introduction";
import Paragraph from "../../scss/component/Paragraph";
import GridProduct from "./GridProduct/GridProduct";
import SlideParagraph from "./SlideParagraph/SlideParagraph";
import Banner from "./Banner/Banner";
import Cosmetic from "./Cosmestic/Cosmestic";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "../../scss/layout/Footer";
import { useState } from "react";


function Home() {
  const [title] = useState({
    title1: "All for your online store",
    title2: "Premium skincare",
  });

  return (
    <div>
      <HeaderHome />
      <NavbarHome />
      <SliderJS />
      <Swiper />
      <Categories />
      <Introduction />
      <Paragraph title={title.title1} />
      <GridProduct />
      <SlideParagraph />
      <Banner />
      <Paragraph title={title.title2} />
      <Cosmetic />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
