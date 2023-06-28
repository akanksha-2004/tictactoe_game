import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  const nextPlayer = isXNext ? 'X' : '0';

  const handleSquareClick = clickedposition => {
    if (squares[clickedposition]) {
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
      <h2>Next player somebody {nextPlayer}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
