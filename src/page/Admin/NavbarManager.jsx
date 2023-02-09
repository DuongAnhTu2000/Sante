import "./NavbarManager.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const NavbarManager = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  const handleLogOut = async () => {
    await logout();
    console.log("out", logout());
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Link to="/admin" className="button--admin">
                    <Typography>Admin</Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Link to="/product" className="button--admin">
                    <Typography>Product</Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Link to="/shop" className="button--admin">
                    <Typography>Shop</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Box>
              <Link to="/">
                <img
                  src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/logo-big.png"
                  alt="logo"
                  className="admin-logo"
                ></img>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/admin" className="button--admin">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                  className="button--admin"
                >
                  Admin
                </Button>
              </Link>
              <Link to="/product" className="button--admin">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                  className="button--admin"
                >
                  Product
                </Button>
              </Link>
              <Link to="/shop" className="button--admin">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                  className="button--admin"
                >
                  Shop
                </Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleLogOut}
                sx={{ p: 0 }}
                className="button--admin"
              >
                Log Out
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavbarManager;
