import Timer from "../components/Timer";

interface HeaderProps {
  gameStarted: boolean;
  gameOver: boolean;
}

const Header: React.FC<HeaderProps> = ({ gameStarted, gameOver }) => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-green-300 text-white p-6 flex justify-between">
      <span className="text-2xl text-white font-bold inline-flex">
        <svg
          className="hw-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h2 className="px-2">Where is Waldo?</h2>
      </span>
      {gameStarted && <Timer gameStarted={gameStarted} gameOver={gameOver} />}
    </nav>
  );
};

export default Header;
