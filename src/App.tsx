import { useState, useEffect } from "react";
import ContextMenu from "./components/ContextMenu";
import Cursor from "../src/components/Cursor";
import Header from "./components/Header";
import WelcomeModal from "./components/WelcomeModal";
import firestore from "./firebase/config";
import background from "./images/background.jpg";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   document.addEventListener("mousemove", onMouseMove);
  //   return () => document.removeEventListener("mousemove", onMouseMove);
  // }, []);

  // const onMouseMove = (e: any) => {
  //   setPosition({ x: e.clientX, y: e.clientY });
  // };

  const startGame = (): void => {
    setGameStarted(true);
  };

  const handleContextMenu = (): void => {
    alert("clicked");
  };

  const CustomMenu = () => (
    <ul className="text-white text-xl">
      <li className="p-1 rounded hover:bg-gray-400">Homer</li>
      <li className="p-1 rounded hover:bg-gray-400">Mr. Burns</li>
      <li className="p-1 rounded hover:bg-gray-400">Sir Oinks-A-Lot</li>
    </ul>
  );

  // const RenderData = (doc: any) => {
  //   return <li>{doc.data()}</li>;
  // };

  // firestore
  //   .collection("characters")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       // RenderData(doc);
  //       const x = doc.data()["Homer"]["x"];
  //       const y = doc.data()["Homer"]["y"];
  //       const posX = position["x"];
  //       const posY = position["y"];
  //       if (x === posX || y === posY) console.log("hi");
  //     });
  //   });

  return (
    <>
      <Header gameStarted={gameStarted} gameOver={gameOver} />
      {gameStarted && <Cursor />}
      {!gameStarted && <WelcomeModal startGame={startGame} />}
      <ContextMenu menu={<CustomMenu></CustomMenu>} />
      {/* <RenderData></RenderData> */}
      <img src={background} alt="Simpson's background" />
    </>
  );
};

export default App;
