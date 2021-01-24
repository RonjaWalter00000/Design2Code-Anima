import Buttonsecondary3 from "../Buttonsecondary3"
import Buttonprimary5 from "../Buttonprimary5"
import "./CalltoAction3.css"
import React from "react";

function CalltoAction3(props) {
  const {
    frame16,
    thisIsAH2Headline,
    loremIpsumDolorSitAmetConseteturSad,
    loremIpsumDolorSitAmetConseteturSad2,
    buttonsecondary3Props,
    buttonprimary5Props,
  } = props;

  return (
    <div className="call-to-action-C61RwL">
      <div className="frame-16-LJ2pJr" style={{ backgroundImage: `url(${frame16})` }}>
        <div className="frame-15-5kCSFS">
          <div className="text-area-cta-bnMbaO">
            <div className="this-is-a--2-headline-FKTSyb">{thisIsAH2Headline}</div>
            <div className="frame-13-FKTSyb">
              <div className="lorem-ipsu-quyam-erat-3qRedS jost-regular-normal-white-16px">
                {loremIpsumDolorSitAmetConseteturSad}
              </div>
              <div className="lorem-ipsu-quyam-erat-jhkzLy jost-regular-normal-white-16px">
                {loremIpsumDolorSitAmetConseteturSad2}
              </div>
            </div>
          </div>
          <div className="frame-14-bnMbaO">
            <Buttonsecondary3 spanText={buttonsecondary3Props.spanText} spanText2={buttonsecondary3Props.spanText2} />
            <Buttonprimary5 thisIsText={buttonprimary5Props.thisIsText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalltoAction3;
