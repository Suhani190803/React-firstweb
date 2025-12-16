import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';


function App() {
  let template ='';
  const[count,setCount]=useState(1)
  const[pshow,setPshow]=useState(true)
  if(pshow){
    template=<Card/>
  //  template=<>
   {/* <button className='bg-pink-800 p-4' onClick={()=>setPshow(!pshow)}>Hide</button>
   <p>Welcome to India</p>
   </> */}
  }
  else{
    // template=<button className='bg-blue-900 p-4' onClick={()=>setPshow(!pshow)}>Show</button>
    template=''
  }

  let displayData =()=>{
    setCount(count+1);
  }
  const addData=(a,b)=>{
    console.log(a+b);
    
  }
  return (
    <div className="App">

     {/* <Header/> */}
     {/* <h2>Count: {count}</h2> */}
     {/* <button className='bg-[red] p-[10px] mr-4' onClick={()=>addData(10,45)} >Add Data</button> */}
     {/* <button className='bg-[red] p-[10px]' onClick={displayData} >Save</button> */}
     <br/>
     {/* <button >Show</button> */}
     <p>{template}</p>
     
     
    </div>
  );
}

export default App;


const Card =()=>{
  return(
    <h1>Welcome to my paragraph</h1>
  )
}


