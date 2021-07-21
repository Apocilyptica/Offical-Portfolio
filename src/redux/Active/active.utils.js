export const handleRemoveApp = ({ prevItems, itemToRemove }) => {
  delete prevItems[itemToRemove];
  return prevItems;
};

export const existingAppItem = ({ prevItems, itemToUpdate }) => {
  return prevItems.find((item) => item.name === itemToUpdate.name);
};

export const handleUpdateStyle = ({ prevItems, action }) => {
  if (action === "minimize") return { ...prevItems, minimized: !prevItems.minimized, display: `${prevItems.minimized ? "block" : "none"}` };
};

export const handleUpdateZIndex = ({ prevItems, zIndex }) => {
  return { ...prevItems, zIndex: zIndex };
};

export const handleUpdateOffset = ({ prevItems, newOffset }) => {
  return { ...prevItems, defaultOffset: newOffset };
};

export const handleUpdateMaximize = ({ prevItems, newSize, defaultSettings }) => {
  return {
    ...prevItems,
    defaultSize: !prevItems.maximized ? newSize : { width: defaultSettings.defaultSize.width, height: defaultSettings.defaultSize.height },
    defaultOffset: !prevItems.maximized ? { x: 0, y: 0 } : { x: defaultSettings.defaultOffset.x, y: defaultSettings.defaultOffset.y },
    maximized: !prevItems.maximized,
  };
};
