import React from "react";
import email from "../images/new-email.png";

export default function Socials() {
  return (
    <div className="h-64">
      <div className="socials-outer h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 overflow:hidden">
        {" "}
        <div className="socials">
          <a target="_blank" href="contact@meaghans.wedding">
            <img src={email} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
}
