import { Link } from "react-router-dom";
import "./RentNow.css";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";


function RentNow() {

  const handleback = () =>{
    
     <Link to="/"></Link>
}


  return (
    <>
                <MdOutlineArrowBackIosNew className={`Arrow`} id="left_arrow" onClick={handleback} />

    <div className="rent-car-container">
      <h1 className="rent-car-title">Rent Your Dream Car</h1>
      <form className="rent-car-form">
        <div className="form-group">
          <label htmlFor="car-model">Car Model</label>
          <select id="car-model" className="form-input">
            <option value="">Select a car model</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="convertible">Convertible</option>
            <option value="sports">Sports Car</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="pickup-location">Pickup Location</label>
          <input
            type="text"
            id="pickup-location"
            className="form-input"
            placeholder="Enter pickup location"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pickup-date">Pickup Date</label>
          <input type="date" id="pickup-date" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="return-date">Return Date</label>
          <input type="date" id="return-date" className="form-input" />
        </div>

        <button type="submit" className="rent-car-btn">
          Rent Now
        </button>
      </form>
    </div>
    </>
  );
}

export default RentNow;
