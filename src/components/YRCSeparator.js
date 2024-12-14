import React from "react";
import './YRCSeparator.css'; // Import the CSS file

const YRCSeparator = ({ lineLength = "50px" }) => {
  return (
    <div className="yrc-separator">
      {/* Left line */}
      <div className="yrc-line" style={{ width: lineLength }}></div>

      {/* Center design */}
      <div className="yrc-center">
        <div className="yrc-cross-horizontal"></div>
        <div className="yrc-cross-vertical"></div>
      </div>

      {/* Right line */}
      <div className="yrc-line" style={{ width: lineLength }}></div>
    </div>
  );
};

export default YRCSeparator;
