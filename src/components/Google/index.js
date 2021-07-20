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

const Google = () => {
  const [appName] = useState("google");
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
          <div className="notepadContainer">
            <iframe
              title="google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0075213371956!2d-86.17460808429246!3d43.00113735236644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819842909a35e91%3A0x10fdb0846db89016!2s15434%20Lincoln%20St%2C%20Grand%20Haven%2C%20MI%2049417!5e1!3m2!1sen!2sus!4v1626741818166!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </AppContainer>
      )}
    </>
  );
};

export default Google;
