import { useEffect, useState } from "react";
import Square from "./Square";
const Board = ({ reset, setReset, winner, setWinner }) => {
  const [turn, setTurn] = useState("X");
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const handleClick = (index) => {
    if (data[index] === "" && winner === "") {
      const newData = [...data];
      newData[index] = turn;
      setData(newData);
      setTurn(turn === "X" ? "O" : "X");
    }
  };
  const checkWinner = () => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        setWinner(`${data[a]} Wins! 🏆`);
        return;
      }
    }

    if (!data.includes("") && winner === "") {
      setWinner("It's a Draw! 🤝");
    }
  };
  useEffect(() => {
    checkWinner();
  }, [data]);
  useEffect(() => {
    if (reset) {
      setData(["", "", "", "", "", "", "", "", ""]);
      setWinner("");
      setTurn("X");
      setReset(false);
    }
  }, [reset, setReset, setWinner]);
  return (
    <div className="board">
      {data.map((value, i) => (
        <Square key={i} value={value} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
};
export default Board;

