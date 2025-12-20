

import { useState } from 'react';
import './App.css';


function App() {
  // const[name,setName] = useState("");
  // const[password,setPswd]=useState("")

  const [formData , setFormData] = useState(
    {
     uname : '',
     upswd : '',
     uemail : '',
     ucontact : '',
     index : ''
  }
)
  const[userData,setUserData]=useState([])
   




  const getValue=(event)=>{
     let oldData ={...formData}
     let inputName=event.target.name;
     let inputValue=event.target.value;
     oldData[inputName]=inputValue;
     setFormData(oldData)
     
  }
   
  let handleSubmit=(event)=>{
    event.preventDefault()
  }
    
  return (
    <div>
      <form className='App' onSubmit={handleSubmit}>
        <h1>Enquiry Now</h1>
        <label>First Name :</label><br/> 
        <input type= "text" onChange={getValue} name='uname' value={formData.uname}  /><br/>
        <label>Password :</label><br/> 
        <input type= "text" onChange={getValue} name='upswd' value={formData.upswd} /><br/>
        <label>Email :</label><br/> 
        <input type= "text"  onChange={getValue} name='uemail' value={formData.uemail} /><br/>
        <label>Contact :</label><br/> 
        <input type= "text" onChange={getValue}  name='ucontact' value={formData.ucontact} />
         
      </form>
     <button> 
      {
      formData.index !== "" ? 'Update' : 'Save'
      }
      </button>
    </div>
    
  )
}

export default App;

