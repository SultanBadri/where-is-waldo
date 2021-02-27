import { useState } from "react";
import ContextMenu from "./components/ContextMenu";
import Cursor from "../src/components/Cursor";
import Header from "./components/Header";
import WelcomeModal from "./components/WelcomeModal";

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const startGame = (): void => {
    setGameStarted(true);
  };

  return (
    <>
      <ContextMenu />
      <Header gameStarted={gameStarted} gameOver={gameOver} />
      {gameStarted && <Cursor />}
      {!gameStarted && <WelcomeModal startGame={startGame} />}
    </>
  );
};

export default App;
