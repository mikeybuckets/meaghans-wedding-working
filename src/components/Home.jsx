import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Wave from "react-wavify";
import Socials from "./Socials";

function Home() {
  return (
    <div id="home">
      <Wave
        className="wave"
        fill="#1B1B1B"
        paused={false}
        options={{
          height: 23,
          amplitude: 45,
          speed: 0.21,
          points: 5
        }}
      />
      <div className="intro">
        <h1>
          We are getting{" "}
          <em className="flex flex-grow bg-yellow-300 highlight">Married!</em>
        </h1>
        <h1>
          <em className="highlight outline-light border-shadow:#e64100">
            Robert
          </em>{" "}
          <span>{"&"}</span> <em variant="outline-light">Meaghan</em>
        </h1>
        {""}
        <h1>
          <em className="highlight">4000 East Palm St. Mesa, Arizona 85215</em>{" "}
        </h1>
        <Button
          padding="10px 15px"
          color="#e64100"
          size="lg"
          border-color="#e64100"
          border-radius="5px"
          width="100%"
          font-size="18px"
          margin="0px auto 20px auto"
          variant="outline-light"
          id="action-btn"
        >
          Learn More!
        </Button>
      </div>
    </div>
  );
}

export default Home;
