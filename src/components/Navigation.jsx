import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CodeIcon from "@material-ui/icons/Code";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "fontsource-roboto";

/** This page has different renders based on suspected mobile
 * or desktop users. The website is intented to be friendly to all displays
 */
const iconStyle = {};
const mobileLinkStyle = {
  color: "white",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  textDecoration: "none",
  width: "25%",
};
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
      <div style={{ backgroundColor: "#44454f" }}>
        <AppBar position="sticky" style={{ width: "100%" }} color="transparent">
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/" style={mobileLinkStyle}>
              <HomeOutlinedIcon style={iconStyle} />
              <div style={{ width: "100%", height: "0" }}></div>
              <Typography variant="subtitle2" style={inline}>
                Home
              </Typography>
            </Link>
            <div style={{ width: "2%" }}></div>
            <Link to="/about" style={mobileLinkStyle}>
              <MenuBookIcon style={iconStyle} />
              <div style={{ width: "100%", height: "0" }}></div>
              <Typography variant="subtitle2" style={inline}>
                Bio
              </Typography>
            </Link>
            <div style={{ width: "2%" }}></div>
            <Link to="/projects" style={mobileLinkStyle}>
              <CodeIcon style={iconStyle} />
              <div style={{ width: "100%", height: "0" }}></div>
              <Typography variant="subtitle2" style={inline}>
                Work
              </Typography>
            </Link>
            <div style={{ width: "2%" }}></div>
            <Link to="/contact" style={mobileLinkStyle}>
              <MailOutlineIcon style={iconStyle} />
              <div style={{ width: "100%", height: "0" }}></div>
              <Typography variant="subtitle2" style={inline}>
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
                marginLeft: "0",
                marginRight: "0",
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
                <Link to="/contact" style={dtopLinkStyle}>
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
