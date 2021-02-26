import { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className="w-10 h-10 z-50 pointer-events-none fixed border-2 border-black border-solid -translate-y-1/2 -translate-x-1/2 rounded-full"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
