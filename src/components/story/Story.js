import React from "react";
import "./Story.css";
import PotLogo from "../../assets/images/LogoChips.png";
import ChipGroup from "../../assets/images/chipGrp.png";

function Story() {
  return (
    <div className="story-container">
      <div className="left">
        <h2>STORY OF A POTATO</h2>
        <div className="bioContainer">
          <h4>1999</h4>
          <h6>Birth of brand new taste</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            nulla unde eveniet.
          </p>
        </div>
        <span className="arrow">&#8595;</span>
        <div className="bioContainer">
          <h4>2013</h4>
          <h6>New potatos in the team</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            nulla unde eveniet.
          </p>
        </div>
        <span className="arrow">&#8595;</span>
        <div className="bioContainer">
          <h4>2023</h4>
          <h6>Logo and Communication</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            nulla unde eveniet.
          </p>
        </div>
      </div>
        <div className="circle-container">
          <div className="circle">
            <h4>2023</h4>
            <img src={PotLogo} alt="PotLogo" />
          </div>
          <img className="chipGrp" src={ChipGroup} alt="Chips Group" />
        </div>
    </div>
  );
}

export default Story;
