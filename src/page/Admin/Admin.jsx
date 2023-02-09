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
  addUser, deleteUser, getUser, updateUser
} from "../../redux/userSlice";
import Footer from "../../scss/layout/Footer";
import "./Admin.scss";
import NavbarManager from "./NavbarManager";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #dbe3d2",
  opacity: 0.4,
  boxShadow: 4,
  padding: 4,
};
function Admin() {
  const users = useSelector((state) => {
    return state.user.user;
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    birthday: "",
  });
  const [formaddUser, setformAddUser] = useState({
    name: "",
    email: "",
    birthday: "",
  });
  const [openId, setOpenId] = useState();
  const handleOpen = (index) => {
    setForm({
      name: users[index].name,
      birthday: users[index].birthday,
      email: users[index].email,
    });
    setOpenId(index);
  };
  const handleClose = () => setOpenId(null);

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleLoadUser = () => {
    dispatch(getUser());
  };
  const handleAddUser = async (e) => {
    e.preventDefault();
    const newUser = {
      ...formaddUser,
    };
    console.log("add");
    await dispatch(addUser(newUser));
    await handleLoadUser();
    setForm({
      name: "",
      email: "",
      birthday: "",
    });
  };

  const handleUpdateUser = (id) => {
    const dataUpdate = {
      id,
      newData: {
        ...form,
      },
    };
    dispatch(updateUser(dataUpdate));
    dispatch(getUser());
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
    dispatch(getUser());
  };

  return (
    <>
      <NavbarManager />
      <div className="dashboard">
        <Stack direction="row" spacing={2}>
          <form onSubmit={handleAddUser} className="form--adduser">
            <Button variant="outlined" color="success" type="submit">
              Add User
            </Button>
            <TextField
              label="User Name"
              className="input--edituser"
              name="username"
              color="success"
              ref={inputRef}
              required={true}
              value={formaddUser.name}
              onChange={(e) => {
                setformAddUser((state) => {
                  return { ...state, name: e.target.value };
                });
              }}
            />
            <TextField
              label="Email"
              className="input--edituser"
              name="email"
              color="success"
              ref={inputRef}
              required={true}
              value={formaddUser.email}
              onChange={(e) => {
                setformAddUser((state) => {
                  return { ...state, email: e.target.value };
                });
              }}
            />
            <TextField
              label="Birthday"
              className="input--edituser"
              name="birthday"
              color="success"
              ref={inputRef}
              required={true}
              value={formaddUser.birthday}
              onChange={(e) => {
                setformAddUser((state) => {
                  return { ...state, birthday: e.target.value };
                });
              }}
            />
          </form>
        </Stack>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" className="table-style">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={user.id}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.birthday}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpen(index)}>
                      <EditIcon className="icon" />
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
                            <TextField
                              label="User Name"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              color="success"
                              className="form--update"
                              variant="outlined"
                              value={form.name}
                              onChange={(e) => {
                                setForm((state) => {
                                  return { ...state, name: e.target.value };
                                });
                              }}
                            />
                            <TextField
                              label="Email"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              value={form.email}
                              color="success"
                              className="form--update"
                              onChange={(e) => {
                                setForm((state) => {
                                  return { ...state, email: e.target.value };
                                });
                              }}
                            />
                            <TextField
                              label="Birthday"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              color="success"
                              className="form--update"
                              value={form.birthday}
                              onChange={(e) => {
                                setForm((state) => {
                                  return {
                                    ...state,
                                    birthday: e.target.value,
                                  };
                                });
                              }}
                            />
                          </div>
                          <div className="button--update">
                            <Button
                              onClick={handleClose}
                              variant="outlined"
                              color="success"
                              fullWidth={true}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="outlined"
                              fullWidth={true}
                              color="success"
                              onClick={() => {
                                handleUpdateUser(user.id);
                                handleLoadUser();
                                handleClose();
                              }}
                            >
                              OK
                            </Button>
                          </div>
                        </Box>
                      </Fade>
                    </Modal>
                    &nbsp;
                    <IconButton
                      onClick={() => {
                        handleDeleteUser(user.id);
                        handleLoadUser();
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

export default Admin;
