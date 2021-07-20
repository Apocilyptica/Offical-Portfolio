import React from "react";

// Components
import HeaderButtons from "./HeaderButtons";

// Styles
import "./styles.scss";

const AppContainer = ({ children, appName, appData, appSettings }) => {
  return (
    <>
      {appSettings && (
        <div
          className="appContainer"
          style={{
            width: `${appSettings.defaultSize.width}px`,
            height: `${appSettings.defaultSize.height}px`,
            left: `${appSettings.defaultOffset.x}px`,
            top: `${appSettings.defaultOffset.y}px`,
            zIndex: `${appSettings.zIndex}`,
            display: `${appSettings.display}`,
          }}
        >
          <div className="appContainerHeader">
            <img src={appSettings.header.icon} alt={appName} />
            <div className="appContainerTitle">{appSettings.header.title}</div>
            <HeaderButtons appName={appName} appData={appData} appSettings={appSettings} />
          </div>
          {children}
        </div>
      )}
    </>
  );
};

export default AppContainer;
