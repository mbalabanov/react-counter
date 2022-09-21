import { useState } from 'react'
import './App.css';

function App() {

  const [ count, setCount ] = useState(1)
  const up = () => setCount(count + 1)
  const down = () => setCount(count - 1)

  if (count > 10) {
    setCount(10)
  }

  if (count < 0) {
    setCount(0)
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2 class="counter">{count}</h2>
      <button onClick={down}>-</button>
      <button onClick={up}>+</button>
    </div>
  );
}

export default App;
