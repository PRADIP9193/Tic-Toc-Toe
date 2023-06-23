import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { PlayerScore } from "./components/PlayerScore";
function App() {
  const ConditionWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const get_winner = WinnerCheck(updatedBoard);
    if (get_winner) {
      if (get_winner === "X") {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      } else {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      }
    }

    // console.log(score);
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const WinnerCheck = (board) => {
    for (let i = 0; i < ConditionWin.length; i++) {
      const [x, y, z] = ConditionWin[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
       setGameOver(true);
        return board[x];
      }
    }
  };
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };
  return (
    <>
      <PlayerScore score={score} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleClick} />
    </>
  );
}

export default App;
