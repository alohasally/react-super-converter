import { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const onChange = (event) => { 
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  }

  return (
    <div >
      <h1 className='h1'>Super Converter</h1>
        <div>
          <label htmlFor='minutes'>Minutes</label>
          <input 
            value={flipped ? Math.round(amount*60) : amount}
            id='minutes'
            placeholder='Minutes'
            type='number'
            onChange={onChange}
            // disabled={flipped === true}
            disabled={flipped}
            />
            <h4>You want to convert {amount} min </h4>
        </div>
        <div>
        <label htmlFor='hours'>Hours</label>
        <input 
            value={flipped ? amount : Math.round(amount/60)} 
            id='hours' 
            placeholder='Hours' 
            type='number'
            onChange={onChange}
            // disabled={flipped === false}
            disabled={!flipped}
            />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>Flip</button>
    </div>
  );
}

export default App;
