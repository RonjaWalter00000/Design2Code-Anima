import Buttonprimary from "../Buttonprimary"
import Buttonsecondary from "../Buttonsecondary"
import "./CalltoAction.css"
import React from "react";

function CalltoAction(props) {
  const {
    ctaBackground,
    loremIpsumDolorSitAmetConseteturSad,
    loremIpsumDolorSitAmetConseteturSad2,
    thisIsAH2Headline,
    buttonprimaryProps,
    buttonsecondaryProps,
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
      <Buttonprimary thisIsText={buttonprimaryProps.thisIsText} />
      <Buttonsecondary spanText={buttonsecondaryProps.spanText} spanText2={buttonsecondaryProps.spanText2} />
    </div>
  );
}

export default CalltoAction;
