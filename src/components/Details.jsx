import React from "react";
import { details } from "../projects.js";
import Wave from "react-wavify";
import Navbar from "./Navbar";

function DetailPage(props) {
  return (
    <div className="detailPage">
      <h6 className="date">{props.date}</h6>
      <img className="details-img" src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h6>{props.role}</h6>
      <hr />
      <div className="details-info">
        <h5>Summary</h5>
        <p className="details-desc">{props.desc}</p>
        <h5>What I Learned</h5>
        <p className="details-desc">{props.learned}</p>
      </div>
    </div>
  );
}
function renderDetails(exp) {
  return (
    <DetailPage
      key={exp.id}
      title={exp.title}
      date={exp.date}
      role={exp.role}
      img={exp.img}
      desc={exp.description}
      learned={exp.learned}
    />
  );
}

export default function Details({
  match: {
    params: { id }
  }
}) {
  window.scrollTo(0, 0);
  return (
    <div className="details-outer">
      <Wave
        className="wave"
        fill="#140a42"
        paused={false}
        options={{
          height: 50,
          amplitude: 45,
          speed: 0.1,
          points: 5
        }}
      />
      <div id="details">{renderDetails(details[id - 1])}</div>
    </div>
  );
  // return <div id="details">{details.map(renderDetails)}</div>;
}
