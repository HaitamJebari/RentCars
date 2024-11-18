import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';


function App() {
  return (
    <div>
    <Router>
      <Navbar/>
        <Routes>
            <Route path='' element={<Home/>} />
        </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
