import Desktop1440 from "./components/Desktop1440"
import IPadPro1291 from "./components/IPadPro1291"
import IPhone81 from "./components/IPhone81"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-1440)">
          <Desktop1440 {...Desktop1440Data} />
        </Route>
        <Route path="/ipad-pro-129-1">
          <IPadPro1291 {...IPadPro1291Data} />
        </Route>
        <Route path="/iphone-8-1">
          <IPhone81 {...IPhone81Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const buttonprimaryData = {
    thisIsText: "This is Text",
};

const buttonsecondaryData = {
    spanText: "This",
    spanText2: " is Text",
};

const calltoActionData = {
    ctaBackground: "/img/cta-background@1x.png",
    loremIpsumDolorSitAmetConseteturSad: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
    loremIpsumDolorSitAmetConseteturSad2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
    thisIsAH2Headline: "Buy my E-Book!",
    buttonprimaryProps: buttonprimaryData,
    buttonsecondaryProps: buttonsecondaryData,
};

const buttonprimary2Data = {
    thisIsText: "This is Text",
};

const Desktop1440Data = {
    shadow1: "/img/shadow-1@2x.png",
    shadow2: "/img/shadow-2@2x.png",
    shadow3: "/img/shadow-2@2x.png",
    shadow4: "/img/shadow-4@2x.png",
    shadow5: "/img/shadow-6@2x.png",
    shadow6: "/img/shadow-6@2x.png",
    loremIpsumDolorSitAmetConseteturSad: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    kenntnisse: "Kenntnisse",
    h2Divider: "/img/h2-divider-3@2x.png",
    cardSketch: "/img/card-sketch@2x.png",
    cardVue: "/img/card-vue@2x.png",
    cardHtml: "/img/card-html@2x.png",
    cardFigma: "/img/card-figma@2x.png",
    cardReact: "/img/card-react@2x.png",
    cardCss: "/img/card-css@2x.png",
    bannerPink: "/img/banner-pink@1x.png",
    bannerBlue: "/img/banner-blue@1x.png",
    loremIpsumDolorSitAmetConseteturSad2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    meineArbeitInZahlen: "Meine Arbeit in Zahlen",
    h2Divider2: "/img/h2-divider-7@2x.png",
    cardKpi125: "/img/card-kpi-125@2x.png",
    cardKpi7: "/img/card-kpi-7@2x.png",
    cardKpi1234: "/img/card-kpi-1234@2x.png",
    loremIpsumDolorSitAmetConseteturSad3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
    habeIchDichBeeindruckt: "Habe ich dich beeindruckt?",
    telefonnummer: "Telefonnummer",
    x00123456789: "+0012 3456789",
    linkStyling: "/img/link-styling-2@2x.png",
    infoMaxmustermannCom: "info@maxmustermann.com",
    eMailAdresse: "E-Mail Adresse",
    linkStyling2: "/img/link-styling-3@2x.png",
    loremIpsumDolorSitAmetConseteturSad4: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
    meinePhilosophie: "Meine Philosophie",
    h2Divider3: "/img/h2-divider-7@2x.png",
    maxMustermann: "/img/max-mustermann@2x.jpg",
    backgroundImage: "/img/background-image@1x.jpg",
    glassmorphismCircle1: "/img/glassmorphism-circle-1@1x.png",
    persona: "/img/persona@2x.png",
    glassmorphismCircle2: "/img/glassmorphism-circle-2@2x.png",
    glassmorphismCircle3: "/img/glassmorphism-circle-3@2x.png",
    mouseWhitespace: "/img/mouse-whitespace@2x.png",
    scrolling: "/img/scrolling@2x.png",
    loremIpsumDolorSitAmetConseteturSad5: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
    ichBinWebdesigner: "Ich bin Webdesigner.",
    h1Divider: "/img/h1-divider-1@2x.png",
    calltoActionProps: calltoActionData,
    buttonprimary2Props: buttonprimary2Data,
};

const buttonprimary3Data = {
    thisIsText: "This is Text",
};

const buttonprimary4Data = {
    thisIsText: "This is Text",
};

const buttonsecondary2Data = {
    spanText: "This",
    spanText2: " is Text",
};

const calltoAction2Data = {
    ctaBackground: "/img/cta-background-1@1x.png",
    loremIpsumDolorSitAmetConseteturSad: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
    loremIpsumDolorSitAmetConseteturSad2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
    thisIsAH2Headline: "Buy my E-Book!",
    buttonprimary4Props: buttonprimary4Data,
    buttonsecondary2Props: buttonsecondary2Data,
};

const IPadPro1291Data = {
    loremIpsumDolorSitAmetConseteturSad: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
    habeIchDichBeeindruckt: "Habe ich dich beeindruckt?",
    telefonnummer: "Telefonnummer",
    x00123456789: "+0012 3456789",
    linkStyling: "/img/link-styling-2@2x.png",
    infoMaxmustermannCom: "info@maxmustermann.com",
    eMailAdresse: "E-Mail Adresse",
    linkStyling2: "/img/link-styling-3@2x.png",
    loremIpsumDolorSitAmetConseteturSad2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    kenntnisse: "Kenntnisse",
    h2Divider: "/img/h2-divider-3@2x.png",
    shadow1: "/img/shadow-1-1@2x.png",
    shadow2: "/img/shadow-2-1@2x.png",
    shadow3: "/img/shadow-3-1@2x.png",
    shadow4: "/img/shadow-4-1@2x.png",
    shadow5: "/img/shadow-5-1@2x.png",
    shadow6: "/img/shadow-6-1@2x.png",
    cardSketch: "/img/card-sketch-1@2x.png",
    cardVue: "/img/card-vue-1@2x.png",
    cardHtml: "/img/card-html-1@2x.png",
    cardFigma: "/img/card-figma-1@2x.png",
    cardReact: "/img/card-react-1@2x.png",
    cardCss: "/img/card-css-1@2x.png",
    bannerPink: "/img/banner-pink-1@1x.png",
    bannerBlue: "/img/banner-blue-1@1x.png",
    loremIpsumDolorSitAmetConseteturSad3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    meineArbeitInZahlen: "Meine Arbeit in Zahlen",
    h2Divider2: "/img/h2-divider-7@2x.png",
    cardKpi7: "/img/card-kpi-7-1@2x.png",
    cardKpi1234: "/img/card-kpi-1234-1@2x.png",
    cardKpi125: "/img/card-kpi-125-1@2x.png",
    loremIpsumDolorSitAmetConseteturSad4: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
    meinePhilosophie: "Meine Philosophie",
    h2Divider3: "/img/h2-divider-7@2x.png",
    maxMustermann: "/img/max-mustermann-1@2x.jpg",
    backgroundImage: "/img/background-image-1@1x.jpg",
    glassmorphismCircle1: "/img/glassmorphism-circle-1-1@2x.png",
    persona: "/img/persona-1@2x.png",
    glassmorphismCircle2: "/img/glassmorphism-circle-2-1@2x.png",
    glassmorphismCircle3: "/img/glassmorphism-circle-3-1@2x.png",
    mouseWhitespace: "/img/mouse-whitespace-1@2x.png",
    scrolling: "/img/scrolling-1@2x.png",
    loremIpsumDolorSitAmetConseteturSad5: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    ichBinWebdesigner: "Ich bin Webdesigner.",
    h1Divider: "/img/h1-divider-1@2x.png",
    buttonprimary3Props: buttonprimary3Data,
    calltoAction2Props: calltoAction2Data,
};

const buttonsecondary3Data = {
    spanText: "This",
    spanText2: " is Text",
};

const buttonprimary5Data = {
    thisIsText: "This is Text",
};

const calltoAction3Data = {
    frame16: "/img/frame-16@1x.png",
    thisIsAH2Headline: "Buy my E-Book!",
    loremIpsumDolorSitAmetConseteturSad: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
    loremIpsumDolorSitAmetConseteturSad2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
    buttonsecondary3Props: buttonsecondary3Data,
    buttonprimary5Props: buttonprimary5Data,
};

const buttonprimary6Data = {
    thisIsText: "This is Text",
};

const IPhone81Data = {
    loremIpsumDolorSitAmetConseteturSad: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
    habeIchDichBeeindruckt: "Habe ich dich beeindruckt?",
    h2Divider: "/img/h2-divider-7@2x.png",
    telefonnummer: "Telefonnummer",
    x00123456789: "+0012 3456789",
    linkStyling: "/img/link-styling-4@2x.png",
    infoMaxmustermannCom: "info@maxmustermann.com",
    eMailAdresse: "E-Mail Adresse",
    linkStyling2: "/img/link-styling-5@2x.png",
    shadow5: "/img/shadow-8@2x.png",
    shadow7: "/img/shadow-8@2x.png",
    shadow9: "/img/shadow-8@2x.png",
    shadow6: "/img/shadow-8@2x.png",
    shadow8: "/img/shadow-8@2x.png",
    shadow10: "/img/shadow-8@2x.png",
    cardSketch: "/img/card-sketch-2@2x.png",
    cardFigma: "/img/card-figma-2@2x.png",
    cardCss: "/img/card-css-2@2x.png",
    cardVue: "/img/card-vue-2@2x.png",
    cardHtml: "/img/card-html-2@2x.png",
    cardReact: "/img/card-react-2@2x.png",
    loremIpsumDolorSitAmetConseteturSad2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    kenntnisse: "Kenntnisse",
    h2Divider2: "/img/h2-divider-7@2x.png",
    bannerPink: "/img/banner-pink-2@1x.png",
    bannerBlue: "/img/banner-blue-2@1x.png",
    cardKpi125: "/img/card-kpi-125-2@2x.png",
    cardKpi7: "/img/card-kpi-7-2@2x.png",
    cardKpi1234: "/img/card-kpi-1234-2@2x.png",
    loremIpsumDolorSitAmetConseteturSad3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
    meineArbeitInZahlen: "Meine Arbeit in Zahlen",
    h2Divider3: "/img/h2-divider-7@2x.png",
    loremIpsumDolorSitAmetConseteturSad4: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
    meinePhilosphie: "Meine Philosphie",
    h2Divider4: "/img/h2-divider-7@2x.png",
    backgroundImage: "/img/background-image-2@1x.jpg",
    glassmorphismCircle1: "/img/glassmorphism-circle-1@2x.png",
    persona: "/img/persona-2@2x.png",
    glassmorphismCircle2: "/img/glassmorphism-circle-2@2x.png",
    glassmorphismCircle3: "/img/glassmorphism-circle-3@2x.png",
    mouseWhitespace: "/img/mouse-whitespace-2@2x.png",
    scrolling: "/img/scrolling@2x.png",
    loremIpsumDolorSitAmetConseteturSad5: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    ichBinWebdesigner: "Ich bin Webdesigner.",
    h1Divider: "/img/h1-divider-1@2x.png",
    calltoAction3Props: calltoAction3Data,
    buttonprimary6Props: buttonprimary6Data,
};

