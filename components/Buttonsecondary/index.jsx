import "./Buttonsecondary.css"
import React from "react";

function Buttonsecondary(props) {
  const { spanText, spanText2 } = props;

  return (
    <div className="button-secondary-LJ2pJr carnation-pink-border-2px">
      <div className="this-is-text-PxQnxq jost-bold-carnation-pink-16px">
        <span className="span1-I4mnVW">{spanText}</span>
        <span className="span2-I4mnVW">{spanText2}</span>
      </div>
    </div>
  );
}

export default Buttonsecondary;
