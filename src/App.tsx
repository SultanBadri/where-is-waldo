import { useState } from "react";
import ContextMenu from "./components/ContextMenu";
import Cursor from "../src/components/Cursor";
import Header from "./components/Header";
import WelcomeModal from "./components/WelcomeModal";
import background from "./images/background.jpg";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const startGame = (): void => {
    setGameStarted(true);
  };

  const CustomMenu = () => (
    <ul className="text-white text-xl">
      <li className="p-1 rounded hover:bg-gray-400">Homer</li>
      <li className="p-1 rounded hover:bg-gray-400">Mr. Burns</li>
      <li className="p-1 rounded hover:bg-gray-400">Sir Oinks-A-Lot</li>
    </ul>
  );

  return (
    <>
      <Header gameStarted={gameStarted} gameOver={gameOver} />
      {gameStarted && <Cursor />}
      {!gameStarted && <WelcomeModal startGame={startGame} />}
      <ContextMenu menu={<CustomMenu></CustomMenu>} />
      <img src={background} alt="Simpson's background" />
    </>
  );
};

export default App;
