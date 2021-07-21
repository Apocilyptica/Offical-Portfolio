import React, { useState, useEffect } from "react";

// Redux
import { useSelector } from "react-redux";

// components
import AppContainer from "../AppContainer";

// Styles
import "./styles.scss";
const mapState = ({ apps, active }) => ({
  apps: apps.items,
  active: active.activeAppSettings,
});

const VSCode = () => {
  const [appName] = useState("vscode");
  const { apps, active } = useSelector(mapState);
  const [appData, setAppData] = useState(null);
  const [appSettings, setAppSettings] = useState(null);

  useEffect(() => {
    setAppData(apps.filter((data) => data.appName === appName)[0]);
  }, [apps, appName]);

  useEffect(() => {
    setAppSettings(active[appName]);
  }, [appName, active]);

  return (
    <>
      {appData && (
        <AppContainer appSettings={appSettings} appData={appData} appName={appName}>
          <div className="vscodeContainter"></div>
        </AppContainer>
      )}
    </>
  );
};

export default VSCode;
