import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import navbarStyles from "../styles/Navbar.module.css";
import Link from "next/link";

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Search",
    link: "/search",
  },
  {
    name: "Buy",
    link: "/search?purpose=for-sale",
  },
  {
    name: "Rent",
    link: "/search?purpose=for-rent",
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const router = useRouter();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", borderBottom: "2px solid #F2F6F7" }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "orange",
                textDecoration: "none",
                flexGrow: 1,
                flex: 1,
              }}
            >
              <Image src={logo} className={navbarStyles.logo} alt="icon" />
              Platinum
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#071C1F"
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
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={`${page.link}`} key={page.name} passHref>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "orange",
              textDecoration: "none",
            }}
          >
            <Image src={logo} className={navbarStyles.logo} alt="icon" />
            Platinum
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page, index) => (
              <Link
                href={`${page.link}`}
                key={page.name}
                passHref
                style={{
                  marginRight: pages.length - 1 > index ? "6px" : "0",
                }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "primaryText",
                    display: "block",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#FF5A3C",
                      transition: "all 0.3s ease-in-out",
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
