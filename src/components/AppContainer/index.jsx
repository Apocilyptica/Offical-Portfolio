import React, { useState, useEffect, useMemo } from "react";

// Redux
import { useDispatch } from "react-redux";
import { updateAppActiveZIndex, updateAppActiveOffset } from "../../redux/Active/active.actions";

// Hooks
import { useMeasure } from "../../hooks/useMeasure";

// Components
import HeaderButtons from "./HeaderButtons";

// Styles
import "./styles.scss";

// Data
import { defaultAppSettings } from "../Data";

const AppContainer = ({ children, appName, appData, appSettings }) => {
  const dispatch = useDispatch();
  const [rect, divRef, windowSize] = useMeasure([appSettings]);
  const [isMoving, setIsMoving] = useState(false);
  const [startingMousePos, setStartingMousePos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [startingOffset, setStartingOffset] = useState({ x: appSettings.defaultOffset.x, y: appSettings.defaultOffset.y });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [posX, setPosX] = useState(appSettings.defaultOffset.x);
  const [posY, setPosY] = useState(appSettings.defaultOffset.y);

  useEffect(() => {
    setPosX(mousePos.x - startingMousePos.x + startingOffset.x);
    setPosY(mousePos.y - startingMousePos.y + startingOffset.y);
    setOffset({ x: posX, y: posY });
  }, [mousePos, startingMousePos, startingOffset]);

  useEffect(() => {
    const footerHeight = window.getComputedStyle(document.getElementById("footer")).getPropertyValue("height").match(/\d+/)[0];

    if (offset.x < 0) offset.x = 0;
    if (offset.y < 0) offset.y = 0;

    if (offset.x + rect.width > windowSize.width) offset.x = windowSize.width - rect.width;
    if (offset.y + rect.height > windowSize.height - footerHeight) offset.y = windowSize.height - rect.height - footerHeight;

    dispatch(updateAppActiveOffset({ appName: appName, appSettings: appSettings, newOffset: offset }));
  }, [offset]);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      setIsMoving(false);
    };

    if (isMoving) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }
  }, [isMoving]);

  const handleSetFocus = () => {
    dispatch(updateAppActiveZIndex({ appName: appName, appSettings: appSettings }));
  };

  const handleAppMoveStart = (e) => {
    e.preventDefault();
    console.log(appSettings);
    if (!appSettings.maximized) {
      setIsMoving(true);
      setStartingOffset({ x: appSettings.defaultOffset.x, y: appSettings.defaultOffset.y });
      setMousePos({ x: e.clientX, y: e.clientY });
      setStartingMousePos({ x: e.clientX, y: e.clientY });
    }
  };

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
          onMouseDown={() => handleSetFocus()}
          ref={divRef}
        >
          <div className="appContainerHeader" onMouseDown={(e) => handleAppMoveStart(e)}>
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
