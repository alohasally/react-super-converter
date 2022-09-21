import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <h1 className='h1'>Super Converter</h1>
        <label htmlFor='minutes'>Minutes</label>
        <input id='minutes' placeholder='Minutes' type='number'/>
        <label htmlFor='hours'>Hours</label>
        <input id='hours' placeholder='Hours' type='number'/>
    </div>
  );
}

export default App;
