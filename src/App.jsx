import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import StatusMessages from './components/StatusMessages';
import { calculateWinner } from './winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareClick = clickedposition => {
    if (squares[clickedposition] || winner) {
      return;
    }
    setsquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedposition === position) {
          return isXNext ? 'X' : '0';
        }

        return squareValue;
      });
    });

    setIsNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <StatusMessages winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
