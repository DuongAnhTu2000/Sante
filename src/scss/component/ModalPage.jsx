import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ModalPage.scss";
import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "1px solid #dbe3d2",
};
const theme = createTheme({
  palette: {
    primary: {
      main: "#2f3327",
    },
  },
});

function ModalPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("1");

  const nagivate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) {
      return;
    }
  }, [user, loading]);

  const login = (email, password) => {
    logInWithEmailAndPassword(email, password)
      .then((res) => {
        // console.log("--- NAVIGATE ADMIN-----");
        nagivate("/admin");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        disableRipple={true}
        sx={{
          textTransform: "none",
          padding: "0",
          "&:hover": {
            background: "transparent",
          },
        }}
        className="btn--login"
      >
        <div className="home--header__right__login lock ">
          <span className="header--text" onClick={handleOpen}>
            <span className="lnr lnr-lock " />
            Login
          </span>
        </div>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <TabContext value={value}>
              <Box>
                <TabList onChange={handleChange} variant="fullWidth">
                  <Tab
                    label="Login"
                    value="1"
                    className="tab--style"
                    disableRipple={true}
                  />
                  <Tab
                    label="Register"
                    value="2"
                    to="/register"
                    className="tab--style"
                    disableRipple={true}
                  />
                  <Tab
                    label="Reset Pass"
                    value="3"
                    to="/reset-password"
                    className="tab--style"
                    disableRipple={true}
                  />
                </TabList>
              </Box>
              <div className="modal--content">
                <TabPanel value="1">
                  <div className="modal--title">
                    <span>Regostration</span>
                    <h2 className="modal-text">Login</h2>
                  </div>
                  <div className="modal--input">
                    <input
                      type="text"
                      name="username"
                      value={email}
                      size={37}
                      placeholder="User Name *"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="modal--input">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      size={37}
                      placeholder="Password *"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="modal--link">
                    <div className="modal--link__remember">
                      <input
                        type="checkbox"
                        name="remember"
                        label="Remember me"
                      />
                      <span htmlFor="remember" className="text--remember">
                        Remember me
                      </span>
                    </div>
                    <Link to="/reset-password" className="forgot--password">
                      Lost Your password?
                    </Link>
                  </div>
                  <button
                    className="button--style button--modal"
                    onClick={() => login(email, password)}
                  >
                    Login
                  </button>
                  <div className="modal--link">
                    <div className="modal--link__remember">
                      <span htmlFor="remember" className="text--remember">
                        Remember me
                      </span>
                    </div>
                    <Link to="/#" className="forgot--password">
                      Register now
                    </Link>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className="modal--title">
                    <span>Regostration</span>
                    <h2 className="modal-text">Register</h2>
                  </div>
                  <div className="modal--input">
                    <input
                      type="text"
                      name="username"
                      size={37}
                      aria-required="true"
                      placeholder="User Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      name="email"
                      size={37}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-required="true"
                      placeholder="Email *"
                    />
                    <input
                      type="password"
                      name="password"
                      size={37}
                      aria-required="true"
                      placeholder="Password *"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      name="confirm_password"
                      size={37}
                      aria-required="true"
                      placeholder="Repeat Password *"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="button--style button--modal"
                    onClick={register}
                  >
                    Register
                  </button>
                </TabPanel>
                <TabPanel value="3">
                  <div className="modal--title">
                    <label>
                      Lost your password? Please enter your username or email
                      address. You will receive a link to create a new password
                      via email.
                    </label>
                  </div>
                  <div className="modal--input">
                    <input
                      type="text"
                      name="user_email"
                      size={37}
                      aria-required="true"
                      placeholder="User Name or Email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="button--style button--modal"
                    onClick={() => sendPasswordReset(email)}
                  >
                    Reset Password
                  </button>
                </TabPanel>
              </div>
            </TabContext>
          </Box>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
}
export default ModalPage;
