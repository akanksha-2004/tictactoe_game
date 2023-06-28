import Board from './components/Board';
import { useState } from 'react';
import './styles.scss';

function App() {
  const [counter, setCounter] = useState(1);

  const onBtnClick = () => {
    console.log('hello');
  };

  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}>click me</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;
