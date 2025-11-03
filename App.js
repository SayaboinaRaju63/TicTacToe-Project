import { useState } from "react";
import Board from "./Board";
import Info from "./Info";
import "./App.css";
function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");
  const resetBoard = () => {
    setReset(true);
  };
  return (
    <div className="App">
      <h1>🎯 Tic Tac Toe</h1>
      <div className={`winner ${winner ? "" : "shrink"}`}>
        <div className="winner-text">{winner}</div>
        <button onClick={resetBoard}>🔁 Reset Game</button>
      </div>
      <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
      <Info />
    </div>
  );
}
export default App;
