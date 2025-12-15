import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSadCry } from '@fortawesome/free-regular-svg-icons/faSadCry';


function App() {
  return (
    <div className="App">
     <FontAwesomeIcon icon={faWhatsapp} className='text-red-900'/>
     <FontAwesomeIcon icon={faPhone} className='text-blue-900'/>
     <FontAwesomeIcon icon={faSadCry} className='text-green-800'/>
     <h1>Welcome to our  website....!</h1>
    </div>
  );
}

export default App;


