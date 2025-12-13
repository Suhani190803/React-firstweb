import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  
  return (
    <div className="App">
        
         {/* <Header/> */}
          
           <Container fluid>
           <Container>
            <Row>
              <Col>
               Welcome to Ayodhyaa
              </Col>
              
            </Row>
           </Container>
          </Container>
          {/* <Footer/> */}
         </div>
         
         
      
  );
}

export default App;


