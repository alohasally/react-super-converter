import { useState } from 'react';
import './App.css';

function App() {
  const [minutes, setMinutes] = useState();
  const onChange = (event) => { 
    setMinutes(event.target.value);
  };
  return (
    <div >
      <h1 className='h1'>Super Converter</h1>
        <label htmlFor='minutes'>Minutes</label>
        <input 
          value={minutes}
          id='minutes'
          placeholder='Minutes'
          type='number'
          onChange={onChange}
          />
          <h4>You want to convert {minutes} </h4>
        <label htmlFor='hours'>Hours</label>
        <input id='hours' placeholder='Hours' type='number'/>
    </div>
  );
}

export default App;
