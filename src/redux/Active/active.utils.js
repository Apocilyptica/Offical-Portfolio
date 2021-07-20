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
