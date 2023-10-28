import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { TextField, InputAdornment, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Home from "./bookMeeting/Home";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import StoryBook from "./bookMeeting/StoryBook";
import User from "./bookMeeting/User";
// import userImage from "./logo.svg"

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    // Use navigate to navigate to the desired route
    navigate('/login');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const location = useLocation();
  const drawer = (
    <div>
      <Toolbar>
        <strong>Book Meeting</strong>
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: "Home", route: "/", icon: <HomeOutlinedIcon /> },
          {
            text: "Story",
            route: "/storybook",
            icon: <DescriptionOutlinedIcon />,
          },
          { text: "User", route: "/user", icon: <PersonOutlineOutlinedIcon /> },
        ].map((item) => (
          <div
            style={{
              backgroundColor:
                location.pathname === item.route ? "#DAE9FC" : "transparent",
                borderRadius: location.pathname === item.route ? "20px" : "none",
            }}
          >
            <Link
              to={item.route}
              key={item.route}
              style={{
                backgroundColor:
                  location.pathname === item.route ? "#DAE9FC" : "transparent",
                borderRadius:
                  location.pathname === item.route ? "20px" : "none",
                  textDecoration: "none",

              }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    style={{
                      color: location.pathname === item.route ? "red" : "black",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    style={{
                      color: location.pathname === item.route ? "red" : "black",
                      textDecoration: "none",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </div>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ backgroundColor: "white" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div></div>
          <div style={{ display: "flex" }}>
            <TextField
              id="input-with-icon-textfield"
              placeholder="search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
              sx={{ borderRadius: "50px" }}
            />
            <Avatar
              style={{ marginLeft: "10px" }}
              alt="Remy Sharp"
              src="https://media0.giphy.com/media/ZXkraFrlIW1D25M6ZJ/giphy.gif?cid=ecf05e47pm0kx6y0au52i7n7izc0faihyvmz80t1kotwmd8x&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              onClick={() => handleLogin()}

            />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        // style={{ backgroundColor: "white" }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storybook" element={<StoryBook />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
