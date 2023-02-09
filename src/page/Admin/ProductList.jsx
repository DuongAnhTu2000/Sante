import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../redux/productSlice";
import Footer from "../../scss/layout/Footer";
import NavbarManager from "./NavbarManager";
import "./ProductList.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
  border: "1px solid #dbe3d2",
  opacity: 0.2,
  boxShadow: 4,
  padding: 4,
};

function ProductList() {
  const products = useSelector((state) => {
    return state.product.product;
  });
  const [form, setForm] = useState({
    image: "",
    name: "",
    categories: "",
    price: "",
    description: "",
  });
  const [formAddProduct, setFormAddProduct] = useState({
    image: "",
    name: "",
    categories: "",
    price: "",
    description: "",
  });
  const [openId, setOpenId] = useState();
  const handleOpen = (index) => {
    setForm({
      image: products[index].image,
      name: products[index].name,
      categories: products[index].categories,
      price: products[index].price,
      description: products[index].description,
    });
    setOpenId(index);
  };
  const handleClose = () => setOpenId(null);

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleLoadProduct = () => {
    dispatch(getProduct());
  };

  const handleImage = (e) => {};
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      ...formAddProduct,
    };
    await dispatch(addProduct(newProduct));
    await handleLoadProduct();
    setForm({
      name: "",
      categories: "",
      price: "",
      description: "",
    });
  };

  const handleUpdateProduct = (id) => {
    const productUpdate = {
      id,
      newData: {
        ...form,
      },
    };
    console.log(productUpdate, "productUpdate");
    dispatch(updateProduct(productUpdate));
    dispatch(getProduct());
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProduct());
  };

  return (
    <>
      <NavbarManager />
      <div className="dashboard--product">
        <Stack direction="row" spacing={2}>
          <form className="form--addProduct">
            <Button
              className="btn--addProduct"
              color="success"
              variant="outlined"
              type="submit"
              onClick={() => {
                handleAddProduct();
              }}
            >
              Add Product
            </Button>
            <Button
              className="btn--upload"
              variant="outlined"
              component="label"
              value={formAddProduct.image}
              fullWidth={true}
              color="success"
              onChange={(e) => {
                setFormAddProduct((state) => {
                  return { ...state, image: e.target.value };
                });
              }}
            >
              Upload
              <input hidden accept="image/*" name="image" type="file" />
            </Button>
            <TextField
              label="Name"
              name="Name"
              color="success"
              value={formAddProduct.name}
              required={true}
              ref={inputRef}
              onChange={(e) => {
                setFormAddProduct((state) => {
                  return { ...state, name: e.target.value };
                });
              }}
            />
            <TextField
              label="Categories"
              name="categories"
              color="success"
              value={formAddProduct.categories}
              required={true}
              ref={inputRef}
              onChange={(e) => {
                setFormAddProduct((state) => {
                  return { ...state, categories: e.target.value };
                });
              }}
            />
            <TextField
              label="Price"
              name="price"
              color="success"
              value={formAddProduct.price}
              required={true}
              ref={inputRef}
              onChange={(e) => {
                setFormAddProduct((state) => {
                  return { ...state, price: e.target.value };
                });
              }}
            />
            <TextField
              label="Description"
              name="description"
              color="success"
              value={formAddProduct.description}
              required={true}
              ref={inputRef}
              onChange={(e) => {
                setFormAddProduct((state) => {
                  return { ...state, description: e.target.value };
                });
              }}
            />
          </form>
        </Stack>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="dashboard--product__title">
                <TableCell>STT</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Categories</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <div className="image--product">
                      <img src={product.image} alt=""></img>
                    </div>
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.categories}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpen(index)}>
                      <EditIcon />
                    </IconButton>
                    <Modal
                      open={index === openId}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={index === openId}>
                        <Box sx={style}>
                          <div className="form--update">
                            <Button
                              variant="outlined"
                              component="label"
                              fullWidth={true}
                              value={form.image}
                              color="success"
                              onChange={(e) => {
                                setForm((state) => {
                                  return { ...state, image: e.target.value };
                                });
                              }}
                            >
                              Upload
                              <input
                                hidden
                                accept="image/*"
                                type="file"
                                onChange={handleImage}
                              />
                            </Button>
                            <TextField
                              label="Name"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              value={form.name}
                              color="success"
                              className="form--update"
                              onChange={(e) => {
                                setForm((state) => {
                                  return { ...state, name: e.target.value };
                                });
                              }}
                            />
                            <TextField
                              label="Categories"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              value={form.categories}
                              color="success"
                              className="form--update"
                              onChange={(e) => {
                                setForm((state) => {
                                  return {
                                    ...state,
                                    categories: e.target.value,
                                  };
                                });
                              }}
                            />
                            <TextField
                              label="Price"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              value={form.price}
                              color="success"
                              className="form--update"
                              onChange={(e) => {
                                setForm((state) => {
                                  return { ...state, price: e.target.value };
                                });
                              }}
                            />
                            <TextField
                              label="Description"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              value={form.description}
                              color="success"
                              className="form--update"
                              onChange={(e) => {
                                setForm((state) => {
                                  return {
                                    ...state,
                                    description: e.target.value,
                                  };
                                });
                              }}
                            />
                          </div>
                          <div className="btn--update">
                            <Button
                              onClick={handleClose}
                              variant="outlined"
                              fullWidth={true}
                              color="success"
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="outlined"
                              color="success"
                              fullWidth={true}
                              onClick={() => {
                                handleUpdateProduct(product.id);
                                handleLoadProduct();
                                handleClose();
                              }}
                            >
                              OK
                            </Button>
                          </div>
                        </Box>
                      </Fade>
                    </Modal>
                    <IconButton
                      onClick={() => {
                        handleDeleteProduct(product.id);
                        handleLoadProduct();
                      }}
                    >
                      <DeleteIcon className="icon" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
