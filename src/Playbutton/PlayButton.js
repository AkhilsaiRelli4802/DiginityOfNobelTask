import React from "react";
import "./PlayButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
const PlayButton = () => {
  return (
    <div className="playB">
      <div className="pulse">
        <FontAwesomeIcon icon={faPlay} />
      </div>
    </div>
  );
};

export default PlayButton;
