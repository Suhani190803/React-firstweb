import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  
  return (
    <div className="App">
        <h2>Hello</h2>
         <Header/>
         <Footer/>
         <div className='row'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
         </div>
         
      </div>
  );
}

export default App;


function Card(){
  return(
    <div className='cardItems'>Card Div</div>
  )
}
