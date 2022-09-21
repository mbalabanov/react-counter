import { useState } from 'react'
import './App.css';

function App() {

  const [ count, setCount ] = useState(1)
  const up = () => setCount(count + 1)
  const down = () => setCount(count - 1)
  const upBy2 = () => setCount(count + 2)
  const downBy2 = () => setCount(count - 2)
  const halveCount = () => setCount(Math.floor(count/2))
  const doubleCount = () => setCount(count * 2)

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
      <button onClick={up}>+</button><br/>
      <button onClick={downBy2}>- -</button>
      <button onClick={upBy2}>+ +</button><br/>
      <button onClick={halveCount}>Halve Count</button><br />
      <button onClick={doubleCount}>Double Count</button>
    </div>
  );
}

export default App;
