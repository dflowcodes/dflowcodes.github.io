import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";
import Navigation from "../components/Navigation";
import rome from "./images/colleseum.jpg";
import desktopBackground from "./images/dtophomeback.png";
import twit from "./images/twitter.png";
import linkedIn from "./images/linkedin.png";
import github from "./images/github.png";
import gitlab from "./images/gitlab.png";
import * as getCardWidth from "./Utils";
import headshot from "./images/headshot.jpg";

function Home() {
  let layeredDiv = {
    display: "flex",
    justifyContent: "center",
  };
  let imgStyle = { width: "80%", height: "auto" };
  if (window.screen.availWidth < 828) {
    return (
      <div>
        <Navigation />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ display: "inline-block" }} width={getCardWidth}>
            <CardMedia component="img" alt="L" height="300" image={rome} />
            <CardContent>
              <Typography variant="h5" style={{ textAlign: "left" }}>
                Hey! The mobile / tablet version of this website is still under
                development. Please try again later or visit on a desktop
                computer to learn more about me!
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navigation />
        <div
          style={{
            backgroundImage: "url(" + desktopBackground + ")",
            backgroundSize: "cover",
            height: "92.3vh",
            color: "#f5f5f5",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "50%",
            }}
          >
            <Avatar
              alt="Avatar"
              src={headshot}
              style={{
                height: "auto",
                width: "15%",
                alignSelf: "flex-end",
              }}
            ></Avatar>
          </div>
          <div style={layeredDiv}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 15,
                flexWrap: "wrap",
                width: "100%%",
                //backgroundColor: "rgb(100, 102, 117)",
              }}
            >
              <Typography variant="h3" style={{ marginBlockEnd: "0" }}>
                Devon Flowers
              </Typography>
              <div style={{ height: "0", flexBasis: "100%" }}></div>
              <Typography variant="h5" style={{ marginBlockEnd: ".65em" }}>
                Software Engineer
              </Typography>
              <div style={{ height: "0", flexBasis: "100%" }}></div>
              <Typography
                variant="subtitle2"
                style={{ marginBlockStart: ".35em" }}
              >
                Passionate - Innovative - Team Driven - Leader
              </Typography>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "2%",
              width: "100%",
            }}
          >
            <Grid
              container
              spacing={5}
              style={{
                width: "100%",
                margin: "0",
              }}
            >
              <Grid item xs={4}></Grid>
              <Grid item xs={1}>
                <a href="https://twitter.com/doubleflowseven">
                  <img src={twit} alt="f" style={imgStyle} />
                </a>
              </Grid>
              <Grid item xs={1}>
                <a href="https://www.linkedin.com/in/devon-flowers-578b52181/">
                  <img src={linkedIn} alt="f" style={imgStyle} />
                </a>
              </Grid>
              <Grid item xs={1}>
                <a href="https://github.com/dflowcodes">
                  <img src={github} alt="f" style={imgStyle} />
                </a>
              </Grid>
              <Grid item xs={1}>
                <a href="https://gitlab.eecs.umich.edu/dflow">
                  <img
                    src={gitlab}
                    alt="f"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </Grid>
              <Grid item xs={4} />
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
