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

const Notepad = () => {
  const [appName] = useState("notepad");
  const { apps, active } = useSelector(mapState);
  const [appData, setAppData] = useState(null);
  const [appSettings, setAppSettings] = useState(null);

  const [docText, setDocText] = useState("");

  useEffect(() => {
    setAppData(apps.filter((data) => data.appName === appName)[0]);
  }, [apps, appName]);

  useEffect(() => {
    setAppSettings(active[appName]);
  }, [appName, active]);

  function onTextAreaKeyDown(e) {
    // handle tabs in text area
    if (e.which === 9) {
      e.preventDefault();
      e.persist();
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      setDocText(`${docText.substring(0, start)}\t${docText.substring(end)}`);

      // asynchronously update textarea selection to include tab
      // workaround due to https://github.com/facebook/react/issues/14174
      requestAnimationFrame(() => {
        e.target.selectionStart = start + 1;
        e.target.selectionEnd = start + 1;
      });
    }
  }

  return (
    <>
      {appData && (
        <AppContainer appSettings={appSettings} appData={appData} appName={appName}>
          <div className="notepadContainer">
            <textarea
              className="notepadTextarea"
              value={docText}
              onChange={(e) => setDocText(e.target.value)}
              onKeyDown={onTextAreaKeyDown}
              spellCheck={false}
            />
          </div>
        </AppContainer>
      )}
    </>
  );
};

export default Notepad;
