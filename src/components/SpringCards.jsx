import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";
import "./styles.scss";
import { Button } from "react-bootstrap";

export default function SpringCards() {
  return (
    <div className="main">
      <Particles
        className="springcardstitle"
        variant="outline-light"
        content-align="center"
      >
        <Button>Enter</Button>
        <div className="buttoncontainer flex flex-grow align-center">
          <div>
            <h1 className="flex flex grow bg-yellow-600 shadowed">
              <em>We're Getting Married!</em>
              {""}
              <h2>
                {"Robert"}
                <em>
                  <em>{"&"}</em>
                  {"Meaghan"}
                </em>
              </h2>
              .{" "}
            </h1>
            <h3 className="flex flex-grow jusity-content:center">
              October 28, 2022
            </h3>
          </div>
          <Info
            className="flex flex-grow"
            variant="outline-light"
            id="action-btn"
          ></Info>
          <Hero>
            <div className="container">
              <div className="row">
                {cards.map((card, i) => (
                  <div className="column">
                    <Card>
                      <div className="card-title">{card.title}</div>
                      <div className="card-body">{card.description}</div>
                      <Image ratio={card.imageRatio} src={card.image} />
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Hero>
        </div>
      </Particles>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}

function Particles({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: "relative" }}>{children}</div>}
    </div>
  );
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + "%"
          }}
        >
          <div className="ratio-inner">
            <img alt={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        opacity="90%"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
}

const cards = [
  {
    title: "Build faster ⚡️",
    image: "https://6jlvz1j5q3.csb.app/undraw_collection.svg",
    imageRatio: 784 / 1016
  },
  {
    title: "Tweak anything 👩‍🎨",
    image: "https://6jlvz1j5q3.csb.app/undraw_upload.svg",
    imageRatio: 839 / 1133
  },
  {
    title: "Tweak anything 👩‍🎨",
    image: "https://6jlvz1j5q3.csb.app/undraw_upload.svg",
    imageRatio: 839 / 1133
  },
  {
    title: "Export your code 🚀",
    image: "https://6jlvz1j5q3.csb.app/undraw_static_assets.svg",
    imageRatio: 730 / 1030
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<SpringCards />, rootElement);
