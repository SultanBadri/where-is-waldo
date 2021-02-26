import { useState } from "react";
import Header from "./components/Header";
import WelcomeModal from "./components/WelcomeModal";

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = (): void => {
    setGameStarted(true);
  };

  return (
    <>
      <Header gameStarted={gameStarted} />
      {!gameStarted && <WelcomeModal startGame={startGame} />}
    </>
  );
};

export default App;
