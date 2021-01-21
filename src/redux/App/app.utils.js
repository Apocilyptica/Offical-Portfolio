export const handleSetFocus = ({ prevItems, itemToSetFocus }) => {
  const existingItem = prevItems.find((items) => items.id === itemToSetFocus.id);

  return prevItems.map((items) =>
    items.id === existingItem.id
      ? {
          ...items,
          isFocus: "isFocus",
        }
      : {
          ...items,
          isFocus: "",
        }
  );
};
