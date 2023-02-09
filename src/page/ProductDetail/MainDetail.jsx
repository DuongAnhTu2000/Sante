import "./MainDetail.scss";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Pagination, Navigation } from "swiper";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addtoCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  opacity: 0.4,
};
const Item = styled(Paper)(() => ({
  textAlign: "center",
  padding: "1px",
  boxShadow: "none",
}));
const theme = createTheme({
  palette: {
    primary: {
      main: "#80827e",
    },
  },
});
function MainDetail() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("1");
  let navigate = useNavigate();

  const [title] = useState({
    title: "Submit",
  });
  const [count, setCount] = useState(1);

  const product = {
    image:
      "https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1.jpg",
    name: "Scrub",
    price: 35.0,
    categories: "Body Care",
    description: "Cleanser ",
    id: "1",
  };
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    const newItem = {
      ...product,
      count,
      totalPrice: count * product.price,
    };
    dispatch(addtoCart(newItem));
    console.log("them san pham ", newItem);
  };

  function handleClick() {
    navigate("/detail");
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="main--detail">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid item xs={5.5}>
              <Item>
                <div className="product--galery">
                  <div className="product--galery__wrap">
                    <div className="product--galery__img">
                      <img
                        src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-1-300x441.jpg"
                        alt=""
                        onClick={handleOpen}
                      />
                    </div>
                    <div className="product--galery__img">
                      <img
                        src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-5-300x441.jpg"
                        alt=""
                        onClick={handleOpen}
                      />
                    </div>
                    <div className="product--galery__img">
                      <img
                        src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-2-300x441.jpg"
                        alt=""
                        onClick={handleOpen}
                      />
                    </div>
                    <div className="product--galery__img">
                      <img
                        src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-3-300x441.jpg"
                        alt=""
                        onClick={handleOpen}
                      />
                    </div>
                    <div className="product--galery__img">
                      <img
                        src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-4-300x441.jpg"
                        alt=""
                        onClick={handleOpen}
                      />
                    </div>
                  </div>
                  <div className="product--galery__img">
                    <img
                      src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1.jpg"
                      alt=""
                      onClick={handleOpen}
                    />
                  </div>
                </div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <Swiper
                        style={{
                          "--swiper-navigation-color": "#fff",
                          "--swiper-pagination-color": "#fff",
                        }}
                        lazy={true}
                        loop={true}
                        navigation={true}
                        modules={[Lazy, Pagination, Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img
                            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-1.jpg"
                            className="swiper-lazy"
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-5.jpg"
                            className="swiper-lazy"
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-2.jpg"
                            className="swiper-lazy"
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-3.jpg"
                            className="swiper-lazy"
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-4.jpg"
                            className="swiper-lazy"
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1.jpg"
                            className="swiper-lazy"
                            alt=""
                          />
                        </SwiperSlide>
                      </Swiper>
                    </Box>
                  </Fade>
                </Modal>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <div className="product--summary">
                  <h2>Scrub</h2>
                  <p className="price">
                    <span className="amount">$35.00</span>
                  </p>
                  <div className="text--description">
                    <p>
                      Quem tota utroque mea ea, nam blandit disputando te, sale
                      volutpat pri in. Mutat eleifend per ut, has ut nusquam
                      accumsan mnesarchum. Solum reque signiferumque ius ea. In
                      primis eripuit menandri his, usu modus munere at eos.
                    </p>
                  </div>
                  <form className="btn--number">
                    <div className="quantity--button">
                      <input
                        type="text"
                        name="quantity"
                        size="4"
                        placeholder=""
                        className="input--text"
                        value={count}
                        onChange={(e) => setCount(+e.target.value)}
                      ></input>
                      <span
                        className="quantity--plus"
                        onClick={() => setCount(Number(count) - 1)}
                      >
                        <span className="lnr lnr-chevron-down"></span>
                      </span>
                      <span
                        className="quantity--minus"
                        onClick={() => setCount(Number(count) + 1)}
                      >
                        <span className="lnr lnr-chevron-up"></span>
                      </span>
                    </div>
                    <button
                      name="add-to-cart"
                      className="button--cart"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </button>
                  </form>
                  <div className="wishlist">
                    <i className="lnr lnr-heart"></i>
                    <span>add to wishlist</span>
                  </div>
                  <div className="product-description">
                    <div>
                      <span>SKU: </span>
                      <span>004</span>
                    </div>
                    <div>
                      <span>Category: </span>
                      <span>
                        <Link to="/#" rel="tag" alt="">
                          Body Care
                        </Link>
                      </span>
                    </div>
                    <div>
                      <span>Tags: </span>
                      <span>
                        <Link to="/#" rel="tag" alt="">
                          Honeymoon
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>

            <div className="tabs--container">
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label="Description"
                      value="1"
                      className="tabs--list"
                      disableRipple={true}
                    />
                    <Tab
                      label="Additional information"
                      value="2"
                      className="tabs--list"
                      disableRipple={true}
                    />
                    <Tab
                      label="Reviews (0)"
                      value="3"
                      className="tabs--list"
                      disableRipple={true}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" className="tab--content">
                  Lorem ipsum dolor sit amet, ad duo ubique dicunt, et commune
                  sensibus eam, at vix omnis fe ugiat sca evola. Has princip es
                  ap pella tur ut, ne has sonet elitr latine, an quo summo
                  munere. Suscipit adipiscing vis in, an vim pla tonem sa
                  lutatus, hinc nihil zril est ut. Ex quodsi as sentior pro des
                  set vel, saepe accusam percipit mel ne. Viris ex petenda ad
                  vim, impedit quaestio ex pri. Hinc deserunt eum no. Vel et
                  fabellas partiendo, brute posse in mea. Vel ad verear pla
                  cerat gu bergren, ad mucius invidunt gloriatur vim. Qui no
                  minavi sapie ntem ac commod are ex sed.
                </TabPanel>
                <TabPanel value="2" className="tab--content">
                  Dimensions &emsp; &emsp; 15 × 10 × 10 cm
                </TabPanel>
                <TabPanel value="3" className="tab--content">
                  <div className="review">
                    <h6 className="tab--content__title">Reviews</h6>
                    <p>There are no reviews yet.</p>
                  </div>
                  <div className="review replyUser">
                    <h6 className="tab--content__title">Leave a comment</h6>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <label>Your Rating</label>
                  <Stack spacing={1}>
                    <Rating
                      name="size-small"
                      defaultValue={0}
                      size="small"
                      sx={{
                        color: "#2f3327",
                      }}
                    />
                  </Stack>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Your Review *"
                    className="textarea"
                  />
                  <div className="form--author">
                    <input
                      name="author"
                      placeholder="Your Name *"
                      type="text"
                      size="80"
                      required="required"
                    />
                    <input
                      name="author"
                      placeholder="Your Email *"
                      type="text"
                      size="80"
                      required="required"
                    />
                  </div>
                  <div className="form--subscrible">
                    <input type="checkbox" value="yes" />
                    <label>
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <button type="button" className="button--style btn--submit">
                    {title.title}
                  </button>
                </TabPanel>
              </TabContext>
              <div className="list--product">
                <div className="wrap--title">
                  <h4 className="wrap--title__paragraph">Related products</h4>
                </div>
                <div className="list--product__row">
                  <div
                    className="swiper-slide"
                    style={{ textDecoration: "none" }}
                    onClick={handleClick}
                  >
                    <img
                      src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1.jpg"
                      alt=""
                    />
                    <div className="swiper-product">
                      <div className="swiper-product-left">
                        <div className="swiper-product-categories">
                          <h5 itemProp="name" className="swiper-product-title">
                            <Link
                              itemProp="url"
                              className="swiper-product-link"
                              to="/detail"
                            >
                              Scrub
                            </Link>
                          </h5>
                          <Link to="/detail" rel="tag">
                            Body Care
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-product-right">
                        <div className="swiper-product-amount">
                          <div className="swiper-product-price">
                            <span className="product-price">$35.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ textDecoration: "none" }}
                    onClick={handleClick}
                  >
                    <img
                      src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-2-img-1-300x441.jpg"
                      alt=""
                    />
                    <div className="swiper-product">
                      <div className="swiper-product-left">
                        <div className="swiper-product-categories">
                          <h5 itemProp="name" className="swiper-product-title">
                            <Link
                              itemProp="url"
                              className="swiper-product-link"
                              to="/detail"
                            >
                              Coco Skies
                            </Link>
                          </h5>
                          <Link to="/detail" rel="tag">
                            Body Care
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-product-right">
                        <div className="swiper-product-amount">
                          <div className="swiper-product-price">
                            <span className="product-price">$78.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ textDecoration: "none" }}
                    onClick={handleClick}
                  >
                    <img
                      src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-10-img-1-1-300x441.jpg"
                      alt=""
                    />
                    <div className="swiper-product">
                      <div className="swiper-product-left">
                        <div className="swiper-product-categories">
                          <h5 itemProp="name" className="swiper-product-title">
                            <Link
                              itemProp="url"
                              className="swiper-product-link"
                              to="/detail"
                            >
                              Honey Green Tea
                            </Link>
                          </h5>
                          <Link to="/detail" rel="tag">
                            Body Care
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-product-right">
                        <div className="swiper-product-amount">
                          <div className="swiper-product-price">
                            <span className="product-price">$25.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ textDecoration: "none" }}
                    onClick={handleClick}
                  >
                    <img
                      src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/h2-product-6-img-300x441.jpg"
                      alt=""
                    />
                    <div className="swiper-product">
                      <div className="swiper-product-left">
                        <div className="swiper-product-categories">
                          <h5 itemProp="name" className="swiper-product-title">
                            <Link
                              itemProp="url"
                              className="swiper-product-link"
                              to="/detail"
                            >
                              Pl Freckle
                            </Link>
                          </h5>
                          <Link to="/detail" rel="tag">
                            Beauty
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-product-right">
                        <div className="swiper-product-amount">
                          <div className="swiper-product-price">
                            <span className="product-price">$90.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default MainDetail;
