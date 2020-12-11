import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Avatar, Toolbar, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CodeIcon from "@material-ui/icons/Code";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import headshot from "../components/images/headshot.jpg";
import "fontsource-roboto";

/** This page has different renders based on suspected mobile
 * or desktop users. The website is intented to be friendly to all displays
 */
const linkStyle = { color: "white", marginRight: 15 };
const iconStyle = {};
const dtopLinkStyle = {
  color: "white",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  textDecoration: "none",
};

/** This class is for the top nav-bar. Note this app is designed for mobile first, hence the odd layout */
function Navigation() {
  let page = <div></div>;
  // Mobile version of site rendered in this block
  if (window.screen.availWidth < 828) {
    page = (
      <div>
        <AppBar position="sticky" style={{ alignItems: "center" }}>
          <Toolbar>
            <Link to="/" style={linkStyle}>
              <Avatar alt="Avatar" src={headshot} style={inline} />
              <Typography variant="h6" style={inline}>
                Home
              </Typography>
            </Link>
            <Link to="/about" style={linkStyle}>
              <MenuBookIcon style={iconStyle} />
              <Typography variant="caption" style={inline}>
                Bio
              </Typography>
            </Link>
            <Link to="/projects" style={linkStyle}>
              <CodeIcon style={iconStyle} />
              <Typography variant="h6" style={inline}>
                Work
              </Typography>
            </Link>
            <Link to="contact" style={linkStyle}>
              <MailOutlineIcon style={iconStyle} />
              <Typography variant="h6" style={inline}>
                Contact
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
    // Desktop Version coded below
  } else {
    page = (
      <div style={{ backgroundColor: "#44454f" }}>
        <AppBar position="sticky" style={{}} color="transparent">
          <Toolbar>
            <Grid
              container
              spacing={10}
              style={{
                width: "100%",
              }}
            >
              <Grid item xs={4}></Grid>
              <Grid item xs={1}>
                <Link to="/" style={dtopLinkStyle}>
                  <HomeOutlinedIcon style={iconStyle} />
                  <Typography variant="subtitle2" style={inline}>
                    Home
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link to="/about" style={dtopLinkStyle}>
                  <MenuBookIcon style={iconStyle} />
                  <Typography variant="subtitle2" style={inline}>
                    Bio
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link to="/projects" style={dtopLinkStyle}>
                  <CodeIcon style={iconStyle} />
                  <Typography variant="subtitle2" style={inline}>
                    Work
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link to="contact" style={dtopLinkStyle}>
                  <MailOutlineIcon style={iconStyle} />
                  <Typography variant="subtitle2" style={inline}>
                    Contact
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  return page;
}

const inline = {
  display: "inline-block",
  fontFamily: "sans-serif",
};

export default Navigation;
