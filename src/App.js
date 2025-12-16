
import { useState } from 'react';
import './App.css';
import BtnModule from './Button.module.css' 





function App() {
   const[pstatus,setPstatus]=useState(false)
   
  const[status,setStatus]=useState(false);
  const[menustatus,setMenustatus]=useState(false);
  
  const[modelstatus,setModalstatus]=useState(false);


  return (
    <div className="App">
      <button  className='en' onClick={()=>setModalstatus(true)}>Enquire Now</button>
       <div onClick={()=>setModalstatus(false)} className={`modalOverlay ${modelstatus ? 'modalShow': '' }`}></div>
       <div className={`ModalDiv ${modelstatus ? 'showModalDiv': '' }`}>
        <h3>Enquiry Now <span onClick={()=>setModalstatus(false)}>&times;</span></h3>
       </div>


      <button className='micon' onClick={()=>setMenustatus(!menustatus)}>
        {menustatus ? <span>&times;</span> : <span>&#9776;</span>}
        
        </button>
      <div className={`menu ${menustatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Menu details</li>
          <li>Photos</li>
          <li>Contact us</li>
        </ul>

      </div>
     <input type={pstatus ? 'text' : 'password'}/>   
      <button onClick={()=>setPstatus(!pstatus)}>{pstatus ? 'Hide' : 'show'}</button>




      {/* <button className={BtnModule.error}>Error</button> */}
      <br/> 
      {/* <button className={BtnModule.warning}>Demo</button> */}
      <br/>
      {/* <button onClick={()=>setStatus(!status)}>{(status)? 'Hide' : 'Show'}</button> */}
      {/* {
      (status)
      ?
      <p className='bg-pink-400'>Welcome to India guyss...</p>
      :
      ''
       }
     */}
     
     
    </div>
  );
}

export default App;




