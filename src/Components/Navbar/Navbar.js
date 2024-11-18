import  "./Navbar.css"
import ph from "../../assets/ph.png"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul>
            <li>
              <div className="img-box">
                  <img src={ph} alt=""/>
              </div>
            </li>     
              
                <li>HOME</li>
                <li>SPORT CARS</li>
                <li>ELECTRIC CARS</li>
                <li>SUV</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;