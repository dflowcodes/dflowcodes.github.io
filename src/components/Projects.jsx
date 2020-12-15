import React from "react";
import Navigation from "./Navigation";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";
import {
  TimelineOppositeContent,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab";
import SchoolIcon from "@material-ui/icons/School";
import cpp from "./images/cpp.png";
import CasinoIcon from "@material-ui/icons/Casino";
import ComputerIcon from "@material-ui/icons/Computer";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StorageIcon from "@material-ui/icons/Storage";
import java from "./images/java.png";
import sql from "./images/sql.png";
import mongo from "./images/mongo.png";
import c from "./images/cicon.png";
import logo from "./images/logo192.png";
import javascript from "./images/javascript.png";
import python from "./images/python.png";
import WorkIcon from "@material-ui/icons/Work";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AndroidIcon from "@material-ui/icons/Android";
import astudiologo from "./images/astudio.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import SearchIcon from "@material-ui/icons/Search";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import VpnLockIcon from "@material-ui/icons/VpnLock";
import golang from "./images/golang.jpg";
import ScreenLockPortraitIcon from "@material-ui/icons/ScreenLockPortrait";

const useStyles = makeStyles((theme) => ({
  secondaryTail: {
    backgroundColor: theme.palette.primary.main,
  },
  primaryTrail: {
    backgroundColor: "#ffd536",
  },

  card: {
    backgroundColor: "#c4c4c4",
  },
}));

function Projects() {
  const classes = useStyles();
  if (window.screen.availWidth < 828) {
    return (
      <div>
        <Navigation />
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "97%",
                marginTop: "2vh",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="h6" align="center">
                Here's a look at some highlights from my programming career
              </Typography>
              <div style={{ width: "100%", height: "0" }}></div>
              <Typography variant="subtitle2" align="center">
                Listed in chronological order - they get cooler as they go.
              </Typography>
              <div style={{ width: "100%", height: "0" }}></div>
              <Button
                variant="contained"
                color="rgb(68, 69, 79)"
                href="/contact"
                style={{
                  marginTop: "1vh",
                  backgroundColor: "#44454F",
                  color: "white",
                }}
              >
                Request A Project Repo
              </Button>
            </div>
            <div style={{ width: "100%", height: "0" }}></div>
            <div style={{ width: "60%" }}>
              <Timeline align="alternate" style={{ alignSelf: "center" }}>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      <b>Freshman Year</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Engineering 101
                        </Typography>
                        <Typography variant="caption">
                          During my first year at UM, I took a basic class in
                          C++. I won't add specific projects to this page as
                          they are quite simple. We learned exclusively in C++.
                          I keep this card first because it is a milestone to
                          me!
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={cpp}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Sophomore Year - <b>Intro to Data Structures</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <CasinoIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Euchre
                        </Typography>
                        <Typography variant="caption">
                          Designed and implemented a fully functional version of
                          the popular midwestern card game 'Euchre'. This
                          project was meant to build up OOP skills and push
                          students to use things like overloaded operators and
                          inheritance. Featured computer players as well as
                          human players.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={cpp}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Junior Year - <b>DS and Algorithms</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <LibraryBooksIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Log Manager
                        </Typography>
                        <Typography variant="caption">
                          In UM's infamous 'EECS281' I completed 4 relatively
                          challenging c++ projects aimed at teaching good
                          programming practice under strict runtime and memory
                          constraints. Most of these were just puzzle solving
                          programs, but the Log Manager was unique in that it
                          was a very useful application. It was capable of
                          reading in massive log files, processing them, and
                          making records retrievable in constant o(1) time with
                          multiple search parameters and filters available to
                          the user.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={cpp}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Junior Year - <b>Database Management</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <StorageIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          FakeBook
                        </Typography>
                        <Typography variant="caption">
                          In my database management systems upper level course,
                          we learned SQL and MobgoDB along with the theory
                          behind building schema and relations. The projects
                          were sequential and centered around a ripoff of the
                          popular social media website. The first project was
                          centered around creating a database schema that could
                          satisfy the unique constraints of such a website. The
                          following project was centered around actually
                          utilizing that database that was artificially
                          populated to fetch queries, many of which were very
                          niche and challenged our ability to use SQL. The
                          following project doubled down on sql skills while
                          introducing students to MongoDB, another popular query
                          language.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid
                          container
                          spacing={5}
                          style={{ alignContent: "end" }}
                        >
                          <Grid item xs={3} style={{ alignSelf: "end" }}>
                            <img
                              src={java}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>{" "}
                          <Grid item xs={3} style={{ alignSelf: "end" }}>
                            <img
                              src={sql}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3} style={{ alignSelf: "end" }}>
                            <img
                              src={mongo}
                              alt="f"
                              style={{
                                width: "80%",
                                height: "50%",
                                justifySelf: "end",
                              }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Junior Year - <b>Intro Computer Architecture</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <ComputerIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          CPU simulation
                        </Typography>
                        <Typography variant="caption">
                          EECS370, an intro to computer architecture class, had
                          sequential projects meant to simulate internal
                          workings of a computer. In this class we learned and
                          wrote a few programs in assembly, but more importantly
                          created an assembler, linker, pipeline simulator, and
                          cache/virtual memory system simulator in the c
                          programming language. These projects greatly boosted
                          my understanding of how a computer compiles,
                          assembles, and ultimately executes programs.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={c}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>{" "}
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      SWE Internship <b>Summer 2020</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <WorkIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          FactSet Internship
                        </Typography>
                        <Typography variant="caption">
                          Although I cannot talk about specifics on this one, I
                          used reactjs, javascript, and python to create a large
                          standalone application that automated and assisted
                          with tasks that some users found challenging. As far
                          as I am aware, this application still serves a purpose
                          and has active users.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={javascript}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={logo}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={python}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Senior year - <b>Java Programming</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <SportsEsportsIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Wheel of Fortune
                        </Typography>
                        <Typography variant="caption">
                          In EECS 285, a technical elective class centered
                          around java programming, I created a fun wheel of
                          fortune application using the Swing UI library. One
                          feature the game lacks that I may add in the feature
                          is randomized puzzles from a bank. Currently, a
                          non-player is needed to enter a puzzle. The game
                          features animated wheel spaces and a display that
                          resembles the actual gameshow.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={java}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <AndroidIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Budget App
                        </Typography>
                        <Typography variant="caption">
                          Another project for my java elective, I developed a
                          standalone application for the android OS using the
                          android studio. The application was a budget tracker
                          that saved data and was able to keep track of
                          categories automatically alongside individual
                          transactions. This application is not published in the
                          android marketplace, but I do plan to take a stab at
                          publishing an application soon (likely to the Apple
                          app store, however).
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={java}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={astudiologo}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Senior year - <b>Web Systems</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <InstagramIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Insta485
                        </Typography>
                        <Typography variant="caption">
                          Created a webstie mock of the popular social media
                          site, Instagram. Took advantage of both client and
                          server side dynamic pages using reactjs and pythons
                          flask library. Supported users creating their own
                          accounts, editing said accuont, uploading images,
                          liking and commenting on images, a custom API, and
                          session data among other things. Users were able to
                          delete posts, comments, and accounts as well and the
                          website even featured the popular double tap to like
                          feature. The database was secure, resistant to sql
                          injection and passwords were salted to avoid
                          dictionary attacks. Database was written and queried
                          in sql.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={python}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            {" "}
                            <img
                              src={logo}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            {" "}
                            <img
                              src={sql}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={javascript}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <SearchIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Search Engine
                        </Typography>
                        <Typography variant="caption">
                          First, we built a custom mapreduce server that
                          utilized threads and processes to implement a master
                          along with any number of workers to run jobs. This
                          server had all the goodies including fault tolerance.
                          Afterwards, we utilized the mapreduce framework along
                          with hadoop to create a pipeline script capable of
                          calculating tf-idf scored for massive documents.
                          Combining these scores with PageRank, we were able to
                          create a lightweight search engine mock. The frontend
                          was a very simple raw html/css design as the focus of
                          this project was on the index and mapreduce server
                          itself.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={python}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Senior year - <b>Computer Security</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <EnhancedEncryptionIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Crypto and Web Security
                        </Typography>
                        <Typography variant="caption">
                          We learned to implement common malicious attacks in
                          order to better understand how to spot vulnerabilties
                          in different software applications. The first two
                          projects were aimed at attacking web systems. We
                          learned how to attack and defend against sql
                          injections, including those that work against systems
                          that immediately hash or encrypt input. We learned how
                          padding oracles can be abused and how certain hash
                          functions can be abused by length extension. Finally,
                          we implemented cross site scripting attacks as well as
                          cross site request forgeries and learned how
                          web/browser designers can defend against these sorts
                          of attacks. NOTE: All attacks implemented in this
                          class were in a controlled environment against domains
                          created by the University of Michigan with the
                          intention of being attacked.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={python}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            {" "}
                            <img
                              src={sql}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={javascript}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <VpnLockIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Man in the Middle Attack
                        </Typography>
                        <Typography variant="caption">
                          In our network security component of the class we
                          first created a small program in Golang that was able
                          to sniff out ARP spoofers and DNS spoofers on a
                          network. Afterwards, we implemented a much larger
                          program, a MITM attack that worked in 6 stages. First,
                          it would intercept any packets determined to be headed
                          for a (obviously fake) bank. Afterwards, it would
                          alter the http request to route the money to an
                          account of our chosing. We would the receive the
                          response, alter the response to avoid suspicion, copy
                          any media files that may have been included, and
                          forward the response. We could handle logins and
                          logouts as well. This project taught me a lot not only
                          about why https is important, but also about the
                          different layers of network protocol and how the
                          tranfer of data over networks really works.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={golang}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <ScreenLockPortraitIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Application Security and Buffer Overflows
                        </Typography>
                        <Typography variant="caption">
                          My last security project of note was an application
                          security project where we used the GDB debugger to
                          dissasemble c programs and find vulnerabilities that
                          would allow us to spawn a root shell. This project was
                          eye opening becuase it showed how bad coding pratices
                          can be easily abused even in the presence of things
                          like data execution prevention on the stack and
                          variable stack offsets. The last of 8 targets was a C
                          program with DEP and an offset stack that had no
                          system calls to abuse. Here we learned how ROP chains
                          can be put together to abuse even the most secure
                          application environments if programmers leave
                          vulnerabilities in their code.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={c}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
              <div>
                <Paper
                  elevation={0}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    padding: "3vh",
                    margin: "2vh",
                  }}
                >
                  <Typography variant="h6" component="h1" align="center">
                    Important notes and whats next{" "}
                  </Typography>
                  <div style={{ width: "100%", height: "0" }} />
                  <Typography variant="subtitle2" align="center">
                    As I navigate my final semester of college, I will need to
                    finish my major design expo as well as one more ULCS class,
                    which I'm sure will produce some webpage worthy content. As
                    I grow and add cooler projects that make the list larger,
                    I'll slowly filter the less impressive ones off. My next big
                    side project is to create a parallel mobile version of this
                    website, then I will be moving on to creating a small
                    application for IOS using swift as I have always wanted to
                    play around in Xcode. Also of note,{" "}
                    <b>many of these projects are hosted in private repos</b>{" "}
                    for Umich honor code purposes. Some of the school related
                    projects from older semesters I do not have access to at all
                    anymore, but if I do have access you will be able to request
                    a copy of the repo by pressing the button below.
                  </Typography>
                  <div style={{ width: "100%", height: "0" }} />
                  <Button
                    variant="contained"
                    color="white"
                    href="/contact"
                    style={{
                      marginTop: "1vh",
                      backgroundColor: "#44454F",
                      color: "white",
                    }}
                  >
                    Request A Project Repo
                  </Button>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navigation />
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "80%",
                marginTop: "2vh",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="h6" align="center">
                Here's a look at some highlights from my programming career
              </Typography>
              <div style={{ width: "100%", height: "0" }}></div>
              <Typography variant="subtitle2" align="center">
                Listed in chronological order - they get cooler as they go.
              </Typography>
              <div style={{ width: "100%", height: "0" }}></div>
              <Button
                variant="contained"
                color="rgb(68, 69, 79)"
                href="/contact"
                style={{
                  marginTop: "1vh",
                  backgroundColor: "#44454F",
                  color: "white",
                }}
              >
                Request A Project Repo
              </Button>
            </div>
            <div style={{ width: "100%", height: "0" }}></div>
            <div style={{ width: "60%" }}>
              <Timeline align="alternate" style={{ alignSelf: "center" }}>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      <b>Freshman Year</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Engineering 101
                        </Typography>
                        <Typography variant="caption">
                          During my first year at UM, I took a basic class in
                          C++. I won't add specific projects to this page as
                          they are quite simple. We learned exclusively in C++.
                          I keep this card first because it is a milestone to
                          me!
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={cpp}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Sophomore Year - <b>Intro to Data Structures</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <CasinoIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Euchre
                        </Typography>
                        <Typography variant="caption">
                          Designed and implemented a fully functional version of
                          the popular midwestern card game 'Euchre'. This
                          project was meant to build up OOP skills and push
                          students to use things like overloaded operators and
                          inheritance. Featured computer players as well as
                          human players.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={cpp}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Junior Year - <b>DS and Algorithms</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <LibraryBooksIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Log Manager
                        </Typography>
                        <Typography variant="caption">
                          In UM's infamous 'EECS281' I completed 4 relatively
                          challenging c++ projects aimed at teaching good
                          programming practice under strict runtime and memory
                          constraints. Most of these were just puzzle solving
                          programs, but the Log Manager was unique in that it
                          was a very useful application. It was capable of
                          reading in massive log files, processing them, and
                          making records retrievable in constant o(1) time with
                          multiple search parameters and filters available to
                          the user.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={cpp}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Junior Year - <b>Database Management</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <StorageIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          FakeBook
                        </Typography>
                        <Typography variant="caption">
                          In my database management systems upper level course,
                          we learned SQL and MobgoDB along with the theory
                          behind building schema and relations. The projects
                          were sequential and centered around a ripoff of the
                          popular social media website. The first project was
                          centered around creating a database schema that could
                          satisfy the unique constraints of such a website. The
                          following project was centered around actually
                          utilizing that database that was artificially
                          populated to fetch queries, many of which were very
                          niche and challenged our ability to use SQL. The
                          following project doubled down on sql skills while
                          introducing students to MongoDB, another popular query
                          language.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid
                          container
                          spacing={5}
                          style={{ alignContent: "end" }}
                        >
                          <Grid item xs={3} style={{ alignSelf: "end" }}>
                            <img
                              src={java}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>{" "}
                          <Grid item xs={3} style={{ alignSelf: "end" }}>
                            <img
                              src={sql}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3} style={{ alignSelf: "end" }}>
                            <img
                              src={mongo}
                              alt="f"
                              style={{
                                width: "80%",
                                height: "50%",
                                justifySelf: "end",
                              }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Junior Year - <b>Intro Computer Architecture</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <ComputerIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          CPU simulation
                        </Typography>
                        <Typography variant="caption">
                          EECS370, an intro to computer architecture class, had
                          sequential projects meant to simulate internal
                          workings of a computer. In this class we learned and
                          wrote a few programs in assembly, but more importantly
                          created an assembler, linker, pipeline simulator, and
                          cache/virtual memory system simulator in the c
                          programming language. These projects greatly boosted
                          my understanding of how a computer compiles,
                          assembles, and ultimately executes programs.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={c}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>{" "}
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      SWE Internship <b>Summer 2020</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <WorkIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          FactSet Internship
                        </Typography>
                        <Typography variant="caption">
                          Although I cannot talk about specifics on this one, I
                          used reactjs, javascript, and python to create a large
                          standalone application that automated and assisted
                          with tasks that some users found challenging. As far
                          as I am aware, this application still serves a purpose
                          and has active users.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={javascript}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={logo}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={python}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Senior year - <b>Java Programming</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <SportsEsportsIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Wheel of Fortune
                        </Typography>
                        <Typography variant="caption">
                          In EECS 285, a technical elective class centered
                          around java programming, I created a fun wheel of
                          fortune application using the Swing UI library. One
                          feature the game lacks that I may add in the feature
                          is randomized puzzles from a bank. Currently, a
                          non-player is needed to enter a puzzle. The game
                          features animated wheel spaces and a display that
                          resembles the actual gameshow.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={java}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <AndroidIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Budget App
                        </Typography>
                        <Typography variant="caption">
                          Another project for my java elective, I developed a
                          standalone application for the android OS using the
                          android studio. The application was a budget tracker
                          that saved data and was able to keep track of
                          categories automatically alongside individual
                          transactions. This application is not published in the
                          android marketplace, but I do plan to take a stab at
                          publishing an application soon (likely to the Apple
                          app store, however).
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={java}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={astudiologo}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Senior year - <b>Web Systems</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <InstagramIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Insta485
                        </Typography>
                        <Typography variant="caption">
                          Created a webstie mock of the popular social media
                          site, Instagram. Took advantage of both client and
                          server side dynamic pages using reactjs and pythons
                          flask library. Supported users creating their own
                          accounts, editing said accuont, uploading images,
                          liking and commenting on images, a custom API, and
                          session data among other things. Users were able to
                          delete posts, comments, and accounts as well and the
                          website even featured the popular double tap to like
                          feature. The database was secure, resistant to sql
                          injection and passwords were salted to avoid
                          dictionary attacks. Database was written and queried
                          in sql.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={python}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            {" "}
                            <img
                              src={logo}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            {" "}
                            <img
                              src={sql}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={javascript}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <SearchIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Search Engine
                        </Typography>
                        <Typography variant="caption">
                          First, we built a custom mapreduce server that
                          utilized threads and processes to implement a master
                          along with any number of workers to run jobs. This
                          server had all the goodies including fault tolerance.
                          Afterwards, we utilized the mapreduce framework along
                          with hadoop to create a pipeline script capable of
                          calculating tf-idf scored for massive documents.
                          Combining these scores with PageRank, we were able to
                          create a lightweight search engine mock. The frontend
                          was a very simple raw html/css design as the focus of
                          this project was on the index and mapreduce server
                          itself.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={python}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Senior year - <b>Computer Security</b>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <EnhancedEncryptionIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Crypto and Web Security
                        </Typography>
                        <Typography variant="caption">
                          We learned to implement common malicious attacks in
                          order to better understand how to spot vulnerabilties
                          in different software applications. The first two
                          projects were aimed at attacking web systems. We
                          learned how to attack and defend against sql
                          injections, including those that work against systems
                          that immediately hash or encrypt input. We learned how
                          padding oracles can be abused and how certain hash
                          functions can be abused by length extension. Finally,
                          we implemented cross site scripting attacks as well as
                          cross site request forgeries and learned how
                          web/browser designers can defend against these sorts
                          of attacks. NOTE: All attacks implemented in this
                          class were in a controlled environment against domains
                          created by the University of Michigan with the
                          intention of being attacked.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={python}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            {" "}
                            <img
                              src={sql}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={javascript}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <VpnLockIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Man in the Middle Attack
                        </Typography>
                        <Typography variant="caption">
                          In our network security component of the class we
                          first created a small program in Golang that was able
                          to sniff out ARP spoofers and DNS spoofers on a
                          network. Afterwards, we implemented a much larger
                          program, a MITM attack that worked in 6 stages. First,
                          it would intercept any packets determined to be headed
                          for a (obviously fake) bank. Afterwards, it would
                          alter the http request to route the money to an
                          account of our chosing. We would the receive the
                          response, alter the response to avoid suspicion, copy
                          any media files that may have been included, and
                          forward the response. We could handle logins and
                          logouts as well. This project taught me a lot not only
                          about why https is important, but also about the
                          different layers of network protocol and how the
                          tranfer of data over networks really works.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={golang}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <ScreenLockPortraitIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTrail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h6" component="h1">
                          Application Security and Buffer Overflows
                        </Typography>
                        <Typography variant="caption">
                          My last security project of note was an application
                          security project where we used the GDB debugger to
                          dissasemble c programs and find vulnerabilities that
                          would allow us to spawn a root shell. This project was
                          eye opening becuase it showed how bad coding pratices
                          can be easily abused even in the presence of things
                          like data execution prevention on the stack and
                          variable stack offsets. The last of 8 targets was a C
                          program with DEP and an offset stack that had no
                          system calls to abuse. Here we learned how ROP chains
                          can be put together to abuse even the most secure
                          application environments if programmers leave
                          vulnerabilities in their code.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container spacing={5}>
                          <Grid item xs={3}>
                            <img
                              src={c}
                              alt="f"
                              style={{ width: "80%", height: "auto" }}
                            />
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
              <div>
                <Paper
                  elevation={0}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    padding: "3vh",
                    margin: "2vh",
                  }}
                >
                  <Typography variant="h6" component="h1" align="center">
                    Important notes and whats next{" "}
                  </Typography>
                  <div style={{ width: "100%", height: "0" }} />
                  <Typography variant="subtitle2" align="center">
                    As I navigate my final semester of college, I will need to
                    finish my major design expo as well as one more ULCS class,
                    which I'm sure will produce some webpage worthy content. As
                    I grow and add cooler projects that make the list larger,
                    I'll slowly filter the less impressive ones off. My next big
                    side project is to create a parallel mobile version of this
                    website, then I will be moving on to creating a small
                    application for IOS using swift as I have always wanted to
                    play around in Xcode. Also of note,{" "}
                    <b>many of these projects are hosted in private repos</b>{" "}
                    for Umich honor code purposes. Some of the school related
                    projects from older semesters I do not have access to at all
                    anymore, but if I do have access you will be able to request
                    a copy of the repo by pressing the button below.
                  </Typography>
                  <div style={{ width: "100%", height: "0" }} />
                  <Button
                    variant="contained"
                    color="white"
                    href="/contact"
                    style={{
                      marginTop: "1vh",
                      backgroundColor: "#44454F",
                      color: "white",
                    }}
                  >
                    Request A Project Repo
                  </Button>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
