import { useState } from 'react';
import './App.css';
import MinutesToHours from './components/MinutesToHours';
import KmToMiles from './components/KmToMiles';

function App() {
  const [index, setIndex] = useState("x");
  const onSelect = (event) => {
    setIndex(event.target.value)
  }

  return (
    <div >
      <h1>Super Converter</h1>
        <select value={index} onChange={onSelect}>
          <option value="x">Select your units</option>
          <option value="0">Mintues & Hours</option>
          <option value="1">Km & Miles</option>
        </select>
        {index === "x" ? "Please select your units" : null}
        {index === "0" ? <MinutesToHours /> : null}
        {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
