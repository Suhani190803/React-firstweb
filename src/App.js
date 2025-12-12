import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Suhani Mishra";
  let l =[10,20,30,40];
  let obj={
    name : "sanya",
    age : 34 ,
    city : "Bihar",
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>{l.map((v)=>{
        return(
          <div>{v}</div>
        )
      })}</h2>

      <div>{obj.city}</div>
      <h3>{10+30}</h3>
    </div>
  );
}

export default App;
