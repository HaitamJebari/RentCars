import React , { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram, faTwitter, faPinterest , faArrowAltCircleLeft} from '@fortawesome/free-brands-svg-icons';
import { MdArrowForwardIos , MdOutlineArrowBackIosNew } from "react-icons/md";
import must from '../../../assets/img/must.png'
import mustt1 from '../../../assets/img/must_tire1.png'
import mustt2 from '../../../assets/img/must_tire2.png'
import audi from '../../../assets/img/audi.png'
import luxus from '../../../assets/img/luxus.png'
import './Home.css'
 
function Home() {
    const [isDownClicked, setIsDownClicked] = useState(false);
    const [isUpClicked, setIsUpClicked] = useState(false);

    const handleDownArrowClick = () => {
        setIsDownClicked(!isDownClicked); // Toggle the state for down arrow click
        setIsUpClicked(false); // Ensure up arrow state is reset
    };

    const handleUpArrowClick = () => {
        setIsUpClicked(!isUpClicked); // Toggle the state for up arrow click
        setIsDownClicked(false); // Ensure down arrow state is reset
    };

    
    return(
      <>
            <MdOutlineArrowBackIosNew className="Arrow" id="right_arrow" onClick={handleDownArrowClick} />

            <div className={`PageHome ${isDownClicked ? 'down' : ''} ${isUpClicked ? 'up' : ''}`}>
                <h1 className='ford'>FORD</h1>
                <h1 className='must'>MUSTANG</h1>
            </div>
            <div className="Car_must">
                <img src={must}/>
            </div>
            <img src={mustt1} id='t1'  alt="T1" />
            <img src={mustt2} id='t2'  alt="T2" />
        
            <div className='PageHome'>
                <h1 className='ford'>AUDI</h1>
                <h1 className='must'>A3</h1>
            </div>
            <div className="Car_must">
                <img src={audi}/>

            </div>

    
            
            
            <div className='PageHome'>
                <h1 className='ford'>LEXUS</h1>
                <h1 className='must'>LC SERIES</h1>
            </div>
            <div className="Car_must">
                <img src={luxus}/>

            </div>

            <MdArrowForwardIos className="Arrow" id="left_arrow" onClick={handleUpArrowClick}/>         

            <div className='buttons'>
                <button type="button" id='rent3'>Rent Now</button>
                <button type="button" id='det3'>Details</button>
            </div>
            




      
            <div className='icons'>
                    <a href="https://www.facebook.com/haitameljebari" target="_blank" rel="">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.instagram.com/haitameljebari"  target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://twitter.com/haitameljebari" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.pinterest.com/haitameljebari" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPinterest} />
                    </a>
            </div>
      </>
    );
}
export default Home;