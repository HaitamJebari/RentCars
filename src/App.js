import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './Components/Container/Home/Home.js';
import Navbar from './Components/Navbar/Navbar.js';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
