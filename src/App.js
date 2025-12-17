
import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BtnModule from './Button.module.css' 
import question from './faqQuestion';
import Faqs from './Faqs';





function App() {
  //  const[pstatus,setPstatus]=useState(false)
   
  // const[status,setStatus]=useState(false);
  // const[menustatus,setMenustatus]=useState(false);
  
  // const[modelstatus,setModalstatus]=useState(false);
  //  let n=["Ram","Shyam","Sundar" , "Shivam"]
     let showNotification = () => {
        // toast.info("Welcome back Suhani");
        // toast.success("Data saved successfully");
        // toast.error("Something went wrong");
        toast.warning("Please fill all fields");


    };


  return (
    <div className="App">
      <button onClick={showNotification}>Save</button>
      <ToastContainer />

      




       {/* <ul>
           {n.map((items,id)=>{
            return(
              <li key ={id}>{items}</li>
            )
           })}
       </ul> */}






      {/* <Faqs/> */}
    {/* //   <div>
    //     <h1>Frequently Asked Questions (FAQs)</h1>
    //     <div className='faqouter'> */}
         {/* {question.map((faqItems,i)=>{
          return(
            <div className='faqItems'>
            <h2>What is Web Development?</h2>
            <p>Web development is the process 
              of creating websites and web applications using technologies like HTML, CSS, JavaScript, 
              and frameworks like React.
            </p>
          </div>
          )
          })} */}


          
      {/* //     <div className='faqItems'>
      //       <h2>What is Web Development?</h2>
      //       <p>Web development is the process 
      //         of creating websites and web applications using technologies like HTML, CSS, JavaScript, 
      //         and frameworks like React.
      //       </p>
      //     </div>
      //     <div className='faqItems'>
      //       <h2>What is Web Development?</h2>
      //       <p>Web development is the process 
      //         of creating websites and web applications using technologies like HTML, CSS, JavaScript, 
      //         and frameworks like React.
      //       </p>
      //     </div>
      //     <div className='faqItems'>
      //       <h2>What is Web Development?</h2>
      //       <p>Web development is the process 
      //         of creating websites and web applications using technologies like HTML, CSS, JavaScript, 
      //         and frameworks like React.
      //       </p>
      //     </div>
      //   </div> */}
      {/* // </div> */}





      {/* <button  className='en' onClick={()=>setModalstatus(true)}>Enquire Now</button>
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
      <button onClick={()=>setPstatus(!pstatus)}>{pstatus ? 'Hide' : 'show'}</button> */}




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



