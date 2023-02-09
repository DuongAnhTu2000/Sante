import "./MainShop.scss";
import "../../scss/component/AddToCart";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getProduct } from "../../redux/productSlice";
import { addtoCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../../scss/component/AddToCart";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function MainShop() {
  let products = useSelector((state) => {
    return state.product.product;
  });
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    let newProduct = [...products];
    if (searchValue !== "") {
      newProduct = newProduct.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (filterValue !== "") {
      switch (filterValue) {
        case "default":
          newProduct = newProduct;
          break;
        case "ascending":
          newProduct = newProduct.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "descending":
          newProduct = newProduct.sort((a, b) => {
            return b.price - a.price;
          });
          break;
        default:
          newProduct = newProduct;
          break;
      }
    }
    setData(newProduct);
  }, [products, searchValue, filterValue]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    const newItem = {
      ...products,
    };
    dispatch(addtoCart(newItem));
  };

  return (
    <div className="main--product">
      <Box>
        <Grid container spacing={4}>
          <Grid flexDirection="column" container item xs={7.5} spacing={0}>
            <Item>
              <div className="main--product__result">
                <div className="search--product">
                  <SearchIcon />
                  <input
                    type="text"
                    onChange={(e) => setSearchValue(e.target.value)}
                  ></input>
                </div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 230 }}>
                  <Select
                    displayEmpty
                    defaultValue="Default sorting"
                    className="product--filter"
                    onChange={(e) => setFilterValue(e.target.value)}
                  >
                    <MenuItem value="Default sorting" className="font--filter">
                      Default sorting
                    </MenuItem>
                    <MenuItem value="ascending">
                      Sort by price: low to high
                    </MenuItem>
                    <MenuItem value="descending">
                      Sort by price: high to low
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Item>
            <Item>
              <Stack>
                <div className="main--product__list">
                  {data.map((product, index) => (
                    <div
                      className="swiper-slides swiper--shop"
                      style={{ textDecoration: "none" }}
                      key={index}
                    >
                      <Link to="/detail">
                        <img src={product.image} alt="" />
                      </Link>
                      <div className="swiper-product">
                        <div className="swiper-product-left">
                          <div className="swiper-product-categories">
                            <h5
                              itemProp="name"
                              className="swiper-product-title"
                            >
                              <Link
                                itemProp="url"
                                className="swiper-product-link"
                                to="/detail"
                              >
                                {product.name}
                              </Link>
                            </h5>
                            <Link to="/detail" rel="tag">
                              {product.categories}
                            </Link>
                          </div>
                        </div>
                        <div className="swiper-product-right">
                          <div className="swiper-product-amount">
                            <div className="swiper-product-price">
                              <span className="swiper-product-price-discount"></span>
                              <span> ${product.price} </span>
                            </div>
                            <AddToCart
                              product={product}
                              onClick={handleAddToCart}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={2.5}>
            <Item>
              <div className="price--filter">
                <div className="widget--products">
                  <h4>Featured Products</h4>
                  <ul className="widget--products__list">
                    <li className="widget--products__list__item">
                      <Link to="/detail">
                        <img
                          width="70"
                          height="102"
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-2-img-1-300x441.jpg"
                          alt=""
                        ></img>
                      </Link>
                      <div className="widget--content">
                        <h6>
                          <Link itemProp="url" to="/detail">
                            Coco Skies
                          </Link>
                        </h6>
                        <span>$78.00</span>
                      </div>
                    </li>
                    <li className="widget--products__list__item">
                      <Link to="/detail">
                        <img
                          width="70"
                          height="102"
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-3-img-1-300x441.jpg"
                          alt=""
                        ></img>
                      </Link>
                      <div className="widget--content">
                        <h6>
                          <Link itemProp="url" to="/detail">
                            Coco Green
                          </Link>
                        </h6>
                        <span className="swiper-product-price-discount">
                          $70.00
                        </span>
                        <span>$50.00</span>
                      </div>
                    </li>
                    <li className="widget--products__list__item">
                      <Link to="/detail">
                        <img
                          width="70"
                          height="102"
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1-300x441.jpg"
                          alt=""
                        ></img>
                      </Link>
                      <div className="widget--content">
                        <h6>
                          <a
                            itemProp="url"
                            href="https://sante.qodeinteractive.com/product/coco-skies/"
                          >
                            Scrub
                          </a>
                        </h6>
                        <span>$35.00</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget--categories">
                  <h4>Categories</h4>
                  <ul>
                    <span>
                      <Link to="/#">Beauty</Link>
                    </span>
                    <span>
                      <Link to="/#">Body Care</Link>
                    </span>
                    <span>
                      <Link to="/#">Breakfast</Link>
                    </span>
                    <span>
                      <Link to="/#">Classic</Link>
                    </span>
                    <span>
                      <Link to="/#">Cosmetics</Link>
                    </span>
                    <span>
                      <Link to="/#">Face</Link>
                    </span>
                    <span>
                      <Link to="/#">Flour</Link>
                    </span>
                    <span>
                      <Link to="/#">Healthy</Link>
                    </span>
                    <span>
                      <Link to="/#">Jam</Link>
                    </span>
                    <span>
                      <Link to="/#">Natural</Link>
                    </span>
                    <span>
                      <Link to="/#">Selfcare</Link>
                    </span>
                    <span>
                      <Link to="/#">Veggies</Link>
                    </span>
                  </ul>
                </div>
                <div className="widget--social">
                  <h4>Follow us</h4>
                  <ul>
                    <Link itemProp="url" to="/#" rel="noreferrer">
                      <i className="fa-brands fa-facebook-f header--left__icon" />
                    </Link>
                    <Link itemProp="url" to="/#" rel="noreferrer">
                      <i className="fa-brands fa-twitter header--left__icon" />
                    </Link>
                    <Link itemProp="url" to="/#" rel="noreferrer">
                      <i className="fa-brands fa-instagram header--left__icon" />
                    </Link>
                  </ul>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MainShop;
