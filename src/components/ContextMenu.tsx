import React from "react";

// override default context menu
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const xPos = e.pageX + "px";
  const yPos = e.pageY + "px";
});

const ContextMenu = () => {
  return <div></div>;
};

export default ContextMenu;
