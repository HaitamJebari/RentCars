import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import {BrowserRouter as Router ,Routes,Route, useLocation} from 'react-router-dom'
import Home from './Components/Home/Home';
import RentNow from './Components/RentNow/RentNow';
import Loginpage from './Components/Loginpage/Loginpage';


function App() {
  const location = useLocation();

  // Define routes where Navbar and Footer should not appear
  const hideNavbarAndFooter = location.pathname === "/loginpage";

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rentnow" element={<RentNow />} />
        <Route path="/loginpage" element={<Loginpage />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}