import React from "react";
import Footer from "../components/Footer";

const backgroundImageURL =
  "https://images.unsplash.com/photo-1502657877623-f66bf489d236?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1";

const desktopImage = {
  backgroundImage: "url(" + backgroundImageURL + ")",
};

const MainPage = (props) => {
  return (
    <div className="mainPage" style={desktopImage}>
      {props.children}
      <Footer />
    </div>
  );
};

export default MainPage;
