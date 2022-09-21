import React from 'react';
import { useState } from 'react';


function KmToMiles() {
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
      <h2 className='h2'>KmToMiles</h2>
        <div>
          <label htmlFor='km'>km</label>
          <input 
            value={inverted ? Math.round(amount*1.609) : amount}
            id='km'
            placeholder='km'
            type='number'
            onChange={onChange}
            // disabled={inverted === true}
            disabled={inverted}
            />
            <h4>You want to convert {amount} km </h4>
        </div>
        <div>
        <label htmlFor='miles'>miles</label>
        <input 
            value={inverted ? amount : Math.round(amount/1.609)} 
            id='miles' 
            placeholder='miles' 
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

export default KmToMiles;