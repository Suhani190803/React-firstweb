import logo from './logo.svg';
import './App.css';
import Header from './Header';


function App() {
  let displayData =()=>{
    alert("Welcome to you")
  }
  const addData=(a,b)=>{
    console.log(a+b);
    
  }
  return (
    <div className="App">

     {/* <Header/> */}
     <button className='bg-[red] p-[10px] mr-4' onClick={()=>addData(10,45)} >Add Data</button>
     <button className='bg-[red] p-[10px]' onClick={displayData} >Save</button>
    
    </div>
  );
}

export default App;


