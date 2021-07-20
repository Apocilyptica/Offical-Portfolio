import React from "react";

import { useHistory } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { setAppActiveRemove, updateAppActiveSettings } from "../../redux/Active/active.actions";
import { setAppInactive } from "../../redux/App/app.actions";

// Styles
import "./styles.scss";

const HeaderButtons = ({ appName, appData, appSettings }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setAppInactive(appData));
    dispatch(setAppActiveRemove(appName));

    history.push("/home");
  };

  const handleMinimize = () => {
    dispatch(updateAppActiveSettings({ appName: appName, appSettings: appSettings, action: "minimize" }));
  };

  return (
    <div className="appHeaderButtons">
      <button className="headerButton buttonMinimize" onClick={() => handleMinimize()} />
      <button className={`headerButton ${appSettings.maximized ? "buttonMaximized" : "buttonMaximize"}`} />
      <button className="headerButton buttonClose" onClick={() => handleClose()} />
    </div>
  );
};

export default HeaderButtons;
