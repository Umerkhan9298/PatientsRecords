import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Button } from "antd";

const HomePage = () => {
  const [color, setColor] = useState("white");
  const toggle = (e) => {
    e.preventDefault();
    if (color === "white") setColor("#3632a8");
    else {
      setColor("white");
    }
  };

  return (
    <div className="jumbotron container">
      <h1>{"{MOCK JSON}"} HackerRank</h1>
      <br />
      <h3 style={{ fontWeight: "lighter" }}>
        Free fake API for testing and prototyping.
      </h3>
      <h3 style={{ fontWeight: "lighter" }}>
        Powered by<span>&nbsp;</span>
        <Link to="/">JSON Server</Link> + <Link to="/">Low DB</Link>
      </h3>
      <br />
      <Link to="/patient" className="btn btn-primary btn-lg">
        Show Patients Records
      </Link>
      <br />
      <br />
      <div className="col-md-12">
        <div className="row">
          <div
            style={{
              border: "0.5px solid black",
              height: "5vh",
              width: "8px",
              backgroundColor: color,
            }}
          ></div>
          <div>
            <Button to="/patient" onClick={toggle} style={{ height: "45px" }}>
              Violet Goodwin
            </Button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HomePage;
