import "./Buttonprimary.css"
import React from "react";

function Buttonprimary(props) {
  const { thisIsText } = props;

  return (
    <div className="button-primary-LJ2pJr smart-layers-pointers ">
      <div className="this-is-text-7JM8KK jost-bold-white-16px">{thisIsText}</div>
    </div>
  );
}

export default Buttonprimary;
