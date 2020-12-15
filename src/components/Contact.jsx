import React, { Component } from "react";
import Navigation from "./Navigation";
import {
  Typography,
  Select,
  MenuItem,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import Rating from "@material-ui/lab/Rating";
import $ from "jquery";

class Contact extends Component {
  state = {
    requestedProjects: [],
    rating: "0",
    name: "",
    email: "",
    message: "",
    buttonDisabled: true,
  };
  render() {
    let spacer = {
      height: "0",
      width: "100%",
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

    const projects = [
      "Euchre",
      "Fakebook",
      "CPU Sim",
      "Wheel of Fortune",
      "Budget Tracker",
      "Insta485 (Server side dynamic)",
      "Insta485 (Client side dynamic)",
      "MapReduce Server",
      "Search Engine",
      "Crypto Project",
      "Web Security",
      "MITM Attacks",
      "Appsec and Buffer Overflows",
    ];

    const handleChange = (event) => {
      this.setState({
        requestedProjects: event.target.value,
      });
    };

    const handleRate = (event) => {
      this.setState({
        rating: event.target.value,
      });
    };

    const handleName = (event) => {
      this.setState({
        name: event.target.value,
      });
    };

    const handleEmail = (event) => {
      this.setState({
        email: event.target.value,
      });
    };

    const handleMessage = (event) => {
      this.setState({
        message: event.target.value,
        buttonDisabled: false,
      });
    };

    const sendEmail = () => {
      var data = {
        service_id: "service_l8vuzla",
        template_id: "template_7j0vt7g",
        user_id: "user_PRcS8QDBhOBb6tsZjUiR5",
        template_params: {
          from_name: this.state.name,
          message: this.state.message,
          rating: this.state.rating,
          requested: this.state.requestedProjects.toString(),
        },
      };
      $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
      })
        .done(function () {
          alert("Your mail is sent!");
        })
        .fail(function (error) {
          alert("Oops... " + JSON.stringify(error));
        });

      this.setState({
        requestedProjects: [],
        rating: "0",
        name: "",
        email: "",
        message: "",
        buttonDisabled: true,
      });
    };

    if (window.screen.availWidth < 828) {
      return (
        <div>
          <Navigation />
          <Typography variant="h4" align="center" style={{ marginTop: "3vh" }}>
            Want to get ahold of me?
          </Typography>
          <div className={spacer}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",

              height: "80vh",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ height: "5vh", width: "100%" }}></div>
              <Typography variant="h6" align="center">
                Select projects to request
              </Typography>
              <div className={spacer}></div>
              <Typography variant="body2" color="textSecondary" align="center">
                Optional - I Will only comply if I can verify you are not, or
                never will be, a college student who could use this to cheat.
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2vh",
                }}
              >
                <Select
                  style={{ width: "20%", alignSelf: "center" }}
                  multiple
                  value={this.state.requestedProjects}
                  onChange={handleChange}
                  MenuProps={MenuProps}
                >
                  {projects.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <Typography
                variant="h6"
                align="center"
                style={{ marginTop: "2vh" }}
              >
                Rate my Website!
              </Typography>
              <div className={spacer}></div>
              <Typography variant="body2" color="textSecondary" align="center">
                Again, optional, but I really appreciate feedback and tips/ideas
                to try!
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Rating
                  name="simple-controlled"
                  onChange={handleRate}
                  value={parseInt(this.state.rating)}
                />
              </div>
              <Typography
                variant="h6"
                align="center"
                style={{ marginTop: "2vh" }}
              >
                Leave your name and a return address
              </Typography>
              <div className={spacer}></div>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={this.state.name}
                    onChange={handleName}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    id="email"
                    label="Email"
                    value={this.state.email}
                    variant="outlined"
                    onChange={handleEmail}
                  />
                </Grid>
              </Grid>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  id="message"
                  label="And finally, a message"
                  variant="outlined"
                  value={this.state.message}
                  multiline
                  onChange={handleMessage}
                  style={{ marginTop: "3vh", width: "100%" }}
                />
                <div className={spacer}></div>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    marginTop: "3%",
                    color: "white",
                  }}
                  onClick={sendEmail}
                  disabled={this.state.buttonDisabled}
                >
                  Send
                </Button>
              </div>
              <Typography
                variant="h6"
                color="textSecondary"
                style={{ marginTop: "3%" }}
              >
                And please be sure to check out the mobile version of the site
                on your phone or tablet
              </Typography>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Navigation />
          <Typography variant="h4" align="center" style={{ marginTop: "3vh" }}>
            Want to get ahold of me?
          </Typography>
          <div className={spacer}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",

              height: "80vh",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ height: "5vh", width: "100%" }}></div>
              <Typography variant="h6" align="center">
                Select projects to request
              </Typography>
              <div className={spacer}></div>
              <Typography variant="body2" color="textSecondary" align="center">
                Optional - I Will only comply if I can verify you are not, or
                never will be, a college student who could use this to cheat.
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2vh",
                }}
              >
                <Select
                  style={{ width: "20%", alignSelf: "center" }}
                  multiple
                  value={this.state.requestedProjects}
                  onChange={handleChange}
                  MenuProps={MenuProps}
                >
                  {projects.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <Typography
                variant="h6"
                align="center"
                style={{ marginTop: "2vh" }}
              >
                Rate my Website!
              </Typography>
              <div className={spacer}></div>
              <Typography variant="body2" color="textSecondary" align="center">
                Again, optional, but I really appreciate feedback and tips/ideas
                to try!
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Rating
                  name="simple-controlled"
                  onChange={handleRate}
                  value={parseInt(this.state.rating)}
                />
              </div>
              <Typography
                variant="h6"
                align="center"
                style={{ marginTop: "2vh" }}
              >
                Leave your name and a return address
              </Typography>
              <div className={spacer}></div>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={this.state.name}
                    onChange={handleName}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    id="email"
                    label="Email"
                    value={this.state.email}
                    variant="outlined"
                    onChange={handleEmail}
                  />
                </Grid>
              </Grid>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  id="message"
                  label="And finally, a message"
                  variant="outlined"
                  value={this.state.message}
                  multiline
                  onChange={handleMessage}
                  style={{ marginTop: "3vh", width: "100%" }}
                />
                <div className={spacer}></div>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    marginTop: "3%",
                    color: "white",
                  }}
                  onClick={sendEmail}
                  disabled={this.state.buttonDisabled}
                >
                  Send
                </Button>
              </div>
              <Typography
                variant="h6"
                color="textSecondary"
                style={{ marginTop: "3%" }}
              >
                And please be sure to check out the mobile version of the site
                on your phone or tablet
              </Typography>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Contact;
