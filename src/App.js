
import { useState } from 'react';
import './App.css';
import BtnModule from './Button.module.css'





function App() {
  const[status,setStatus]=useState(false);
  return (
    <div className="App">

      <button className={BtnModule.error}>Error</button>
      <br/>
      <button className={BtnModule.warning}>Demo</button>
      <br/>
      <button onClick={()=>setStatus(!status)}>{(status)? 'Hide' : 'Show'}</button>
      {
      (status)
      ?
      <p className='bg-pink-400'>Welcome to India guyss...</p>
      :
      ''
       }
    
     
     
    </div>
  );
}

export default App;




