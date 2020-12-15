import React from "react";
import Navigation from "./Navigation";

function About() {
  let console = {
    fontFamily: "courier, monospace",
    color: "#fff",
    width: "50%",
    height: "150vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2vh",
    fontSize: "14px",
  };

  let mobileConsole = {
    fontFamily: "courier, monospace",
    color: "#fff",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2vh",
    fontSize: "14px",
  };

  let a = {
    color: "#0F0",
  };

  let b = {
    color: "#ff0096",
  };

  let c = {
    color: "#0bc",
  };

  let hl = {
    color: "#0bc",
    textDecoration: "none",
  };

  if (window.screen.availWidth < 828) {
    return (
      <div style={{ backgroundColor: "black", height: "250vh" }}>
        <Navigation />
        <div style={mobileConsole}>
          <span style={a}>devon@flowers</span>:<span style={b}>~ </span>
          <span style={c}>$</span> cd personal_site/bio/ <br></br>
          <span style={a}>devon@flowers</span>:<span style={b}>~ </span>
          <span style={c}>$</span> cat bio.txt <br></br>
          <p>
            Welcome to my personal space here on the web! I created this website
            from scratch using react and materialUI. If you're here, you're
            probably wondering a little bit about me. Where to start? <br></br>{" "}
          </p>
          <p>
            Well, I am originally from Watervliet, a Michigan small town on the
            shores of lake Michigan. My father moved to the city of Chicago when
            I was about ten and from there onward I was more or less a dual
            resident. The vast differences in culture and technology between
            small towns and large cities was very apparent to me at a young age
            and this is where my interest in tech and software ultimately began.
            I spent most of my high school years working at a wildly popular
            lakeshore resturant,{" "}
            <a style={hl} href="https://silverbeachpizza.com/">
              Silver Beach Pizza.
            </a>{" "}
            At a smaller high school I had very little exposure to computer
            science in the classroom, but I knew my calling was in the tech
            field.
          </p>
          <p>
            In 2017, I graduted from Watervliet High School and began studying
            Electrical Engineering at the{" "}
            <a href="https://cse.engin.umich.edu/" style={hl}>
              University of Michigan
            </a>{" "}
            in Ann Arbor. Here I quickly found my passion for the logic of
            programming and software and finally made the switch to computer
            science after taking discrete mathematics as a sophomore. I never
            looked back. In the classroom, I have studied a wide range of
            topics: data structures and algorithms, logic, computer security,
            cryptographic theory, web systems, computer architecture, assembly
            languages, database systems, mobile application design, and software
            engineering to name a few.
          </p>
          <p>
            As far as programming expertise goes, I have worked in or completed
            projects with the following languages/frameworks: C, C++, python,
            java , javascript (this website was made using reactjs), html/css,
            swift, golang, sql, and mongodb. I have worked with mapreduce
            frameworks like hadoop, flask backends, AWS, React, and more.
            Because I switched majors late in my sophomore year, my first
            internship in summer 2019 was actually in a position centered around
            electrical engineering through{" "}
            <a style={hl} href="http://www.aep.com/">
              AEP.
            </a>{" "}
            I didn't get much programming experience here outside of automating
            a few excel scripts, but I learned a lot about how to boost the
            productivity of a workplace and be a good teammate within a larger
            corporate setting where you do not have control over every aspect of
            a large operation.
          </p>
          <p>
            Fast forward to summer of 2020, I received my first offer to work as
            a software engineer for{" "}
            <a style={hl} href="https://www.factset.com/">
              FactSet.
            </a>{" "}
            Here, I got full control over my own independant project. I created
            a completly standalone application that helped automate a confusing
            task for users. Though I cannot divulge specifics as far as this
            project is concerned, I can say that I worked with both front and
            backend technologies on this project, creating a seamless UI that
            assisted internal users with everyday tasks. I enjoyed my time at
            FactSet, and apparently they did as well. As of today, I will
            gradute with a BSE in Computer Science in May 2021, and I will be
            returning to their Chicago office in July of 2021 to begin working
            as a full time developer.
          </p>
          <p>To be continued....</p>
          <span style={a}>devon@flowers</span>:<span style={b}>~ </span>
          <span style={c}>$</span> exit
          <p>[Process completed]</p>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "black", height: "100%" }}>
        <Navigation />
        <div style={console}>
          <span style={a}>devon@flowers</span>:<span style={b}>~ </span>
          <span style={c}>$</span> cd personal_site/bio/ <br></br>
          <span style={a}>devon@flowers</span>:<span style={b}>~ </span>
          <span style={c}>$</span> cat bio.txt <br></br>
          <p>
            Welcome to my personal space here on the web! I created this website
            from scratch using react and materialUI. If you're here, you're
            probably wondering a little bit about me. Where to start? <br></br>{" "}
          </p>
          <p>
            Well, I am originally from Watervliet, a Michigan small town on the
            shores of lake Michigan. My father moved to the city of Chicago when
            I was about ten and from there onward I was more or less a dual
            resident. The vast differences in culture and technology between
            small towns and large cities was very apparent to me at a young age
            and this is where my interest in tech and software ultimately began.
            I spent most of my high school years working at a wildly popular
            lakeshore resturant,{" "}
            <a style={hl} href="https://silverbeachpizza.com/">
              Silver Beach Pizza.
            </a>{" "}
            At a smaller high school I had very little exposure to computer
            science in the classroom, but I knew my calling was in the tech
            field.
          </p>
          <p>
            In 2017, I graduted from Watervliet High School and began studying
            Electrical Engineering at the{" "}
            <a href="https://cse.engin.umich.edu/" style={hl}>
              University of Michigan
            </a>{" "}
            in Ann Arbor. Here I quickly found my passion for the logic of
            programming and software and finally made the switch to computer
            science after taking discrete mathematics as a sophomore. I never
            looked back. In the classroom, I have studied a wide range of
            topics: data structures and algorithms, logic, computer security,
            cryptographic theory, web systems, computer architecture, assembly
            languages, database systems, mobile application design, and software
            engineering to name a few.
          </p>
          <p>
            As far as programming expertise goes, I have worked in or completed
            projects with the following languages/frameworks: C, C++, python,
            java , javascript (this website was made using reactjs), html/css,
            swift, golang, sql, and mongodb. I have worked with mapreduce
            frameworks like hadoop, flask backends, AWS, React, and more.
            Because I switched majors late in my sophomore year, my first
            internship in summer 2019 was actually in a position centered around
            electrical engineering through{" "}
            <a style={hl} href="http://www.aep.com/">
              AEP.
            </a>{" "}
            I didn't get much programming experience here outside of automating
            a few excel scripts, but I learned a lot about how to boost the
            productivity of a workplace and be a good teammate within a larger
            corporate setting where you do not have control over every aspect of
            a large operation.
          </p>
          <p>
            Fast forward to summer of 2020, I received my first offer to work as
            a software engineer for{" "}
            <a style={hl} href="https://www.factset.com/">
              FactSet.
            </a>{" "}
            Here, I got full control over my own independant project. I created
            a completly standalone application that helped automate a confusing
            task for users. Though I cannot divulge specifics as far as this
            project is concerned, I can say that I worked with both front and
            backend technologies on this project, creating a seamless UI that
            assisted internal users with everyday tasks. I enjoyed my time at
            FactSet, and apparently they did as well. As of today, I will
            gradute with a BSE in Computer Science in May 2021, and I will be
            returning to their Chicago office in July of 2021 to begin working
            as a full time developer.
          </p>
          <p>To be continued....</p>
          <span style={a}>devon@flowers</span>:<span style={b}>~ </span>
          <span style={c}>$</span> exit
          <p>[Process completed]</p>
        </div>
      </div>
    );
  }
}

export default About;
