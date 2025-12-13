import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
   const headerInfo ={
      email : "sm123@gmail.com",
      password : "345667",
      city : "Bhopal"

   }
  return (
    <div className="App">
        
         <Header  headerInfo ={headerInfo} cname ="GuruvarPvtLmt"/>
          
           
         {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
              
              
            
           
          
          {/* <Footer/> */}
         </div>
         
         
      
  );
}

export default App;


