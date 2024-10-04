import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/register' element={<Login/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
