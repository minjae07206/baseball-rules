import logo from './logo.svg';
import './App.css';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import {Basicrules} from './components/Basicrules';

function App() {
  return (
    <div className="App">
      <Navbar bg='success' style={{ height: '80px' }}>
        <Container>
          <div style={{ textalign: 'left' }}>
            <Navbar.Brand><Link style={{textDecoration: 'none', color: 'black'}} to="/">Trainer Lee's 야구규칙</Link></Navbar.Brand>
            <Navbar.Brand><Link style={{textDecoration: 'none', color: 'black'}} to="/basicrules">야구장 처음 가는데 간단한 규칙 설명</Link></Navbar.Brand>
          </div>
        </Container>
      </Navbar>
      <Routes>
      <Route path="/" element={ <Homepage></Homepage> } /> 
      <Route path="/basicrules" element={ <Basicrules></Basicrules> } /> 
      </Routes>
    </div>
  );
}

export default App;
