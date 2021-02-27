import { useState } from "react";
import ContextMenu from "./components/ContextMenu";
import Cursor from "../src/components/Cursor";
import Header from "./components/Header";
import WelcomeModal from "./components/WelcomeModal";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const startGame = (): void => {
    setGameStarted(true);
  };

  // override default context menu
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const xPos = e.pageX + "px";
    const yPos = e.pageY + "px";

    const customMenu = () => (
      <ul className="menu">
        <li>Login</li>
        <li>Register</li>
        <li>Open Profile</li>
      </ul>
    );

    return (
      <>
        <ContextMenu menu={() => customMenu} />
        <Header gameStarted={gameStarted} gameOver={gameOver} />
        {gameStarted && <Cursor />}
        {!gameStarted && <WelcomeModal startGame={startGame} />}
      </>
    );
  });
};

export default App;
