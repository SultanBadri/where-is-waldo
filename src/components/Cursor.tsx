import { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const hiddenCursor = hidden ? "opacity-0" : "opacity-1";
  const classes = `w-20 h-20 z-50 pointer-events-none fixed border-2 border-black border-solid transform -translate-y-1/2 -translate-x-1/2 rounded-full transition duration 150ms ease ${hiddenCursor}`;

  // hide default cursor
  document.documentElement.style.cursor = "none";

  return (
    <div
      className={classes}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
