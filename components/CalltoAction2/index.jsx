import Buttonprimary4 from "../Buttonprimary4"
import Buttonsecondary2 from "../Buttonsecondary2"
import "./CalltoAction2.css"
import React from "react";

function CalltoAction2(props) {
  const {
    ctaBackground,
    loremIpsumDolorSitAmetConseteturSad,
    loremIpsumDolorSitAmetConseteturSad2,
    thisIsAH2Headline,
    buttonprimary4Props,
    buttonsecondary2Props,
  } = props;

  return (
    <div className="call-to-action-C61RwL">
      <img className="cta-background-LJ2pJr" src={ctaBackground} />
      <div className="lorem-ipsu-quyam-erat-LJ2pJr jost-regular-normal-white-16px">
        {loremIpsumDolorSitAmetConseteturSad}
      </div>
      <div className="lorem-ipsu-quyam-erat-Icuk3e jost-regular-normal-white-16px">
        {loremIpsumDolorSitAmetConseteturSad2}
      </div>
      <div className="this-is-a--2-headline-LJ2pJr">{thisIsAH2Headline}</div>
      <Buttonprimary4 thisIsText={buttonprimary4Props.thisIsText} />
      <Buttonsecondary2 spanText={buttonsecondary2Props.spanText} spanText2={buttonsecondary2Props.spanText2} />
    </div>
  );
}

export default CalltoAction2;
