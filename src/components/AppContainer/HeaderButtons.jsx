import React from "react";

import { useHistory } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { setAppActiveRemove, updateAppActiveSettings, updateAppActiveMaximize, updateAppActiveOffset } from "../../redux/Active/active.actions";
import { setAppInactive } from "../../redux/App/app.actions";

// Hooks
import useWindowsSize from "../../hooks/useWindowsSize";

// Styles
import "./styles.scss";

// Data
import { defaultAppSettings } from "../Data";

const HeaderButtons = ({ appName, appData, appSettings }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const windowsSize = useWindowsSize();

  const handleClose = () => {
    dispatch(setAppInactive(appData));
    dispatch(setAppActiveRemove(appName));

    history.push("/home");
  };

  const handleMinimize = () => {
    dispatch(updateAppActiveSettings({ appName: appName, appSettings: appSettings, action: "minimize" }));
  };

  const handleMaximize = () => {
    dispatch(
      updateAppActiveMaximize({ appName: appName, appSettings: appSettings, newSize: windowsSize, defaultSettings: defaultAppSettings[appName] })
    );
  };

  return (
    <div className="appHeaderButtons">
      <button className="headerButton buttonMinimize" onClick={() => handleMinimize()} />
      <button className={`headerButton ${appSettings.maximized ? "buttonMaximized" : "buttonMaximize"}`} onClick={() => handleMaximize()} />
      <button className="headerButton buttonClose" onClick={() => handleClose()} />
    </div>
  );
};

export default HeaderButtons;
