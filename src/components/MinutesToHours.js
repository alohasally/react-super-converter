import React from 'react';
import { useState } from 'react';


function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => { 
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  }

  return (
    <div >
      <h2 className='h2'>MinutesToHours</h2>
        <div>
          <label htmlFor='minutes'>Minutes</label>
          <input 
            value={inverted ? Math.round(amount*60) : amount}
            id='minutes'
            placeholder='Minutes'
            type='number'
            onChange={onChange}
            // disabled={inverted === true}
            disabled={inverted}
            />
            <h4>You want to convert {amount} min </h4>
        </div>
        <div>
        <label htmlFor='hours'>Hours</label>
        <input 
            value={inverted ? amount : Math.round(amount/60)} 
            id='hours' 
            placeholder='Hours' 
            type='number'
            onChange={onChange}
            // disabled={inverted === false}
            disabled={!inverted}
            />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onInvert}>Flip</button>
    </div>
  );
}

export default MinutesToHours;