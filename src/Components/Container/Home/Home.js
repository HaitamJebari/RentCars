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
    const [animationDirection, setAnimationDirection] = useState(''); // State for animation direction
    const [carAnimationClass, setCarAnimationClass] = useState(''); // State for Car_must animation class
    const [t1AnimationClass, setT1AnimationClass] = useState(''); // State for t1 animation class
    const [t2AnimationClass, setT2AnimationClass] = useState(''); // State for t2 animation class

    const handleDownArrowClick = () => {
        setIsDownClicked(!isDownClicked);
        setIsUpClicked(false);
        setAnimationDirection('left'); // Set animation direction to left
        setCarAnimationClass('slideLeft'); // Apply animation class for Car_must
        setT1AnimationClass('rotateLeft'); // Apply animation class for t1
        setT2AnimationClass('rotateLeft'); // Apply animation class for t2
    };

    

    // const handleLeftArrowClick = () => {
    //     setIsUpClicked(!isUpClicked);
    //     setIsDownClicked(false);
    //     setAnimationDirection('right'); // Set animation direction to right
    //     setCarAnimationClass('slideLeft'); // Apply animation class for Car_must
    //     setT1AnimationClass('rotateLeft'); // Apply animation class for t1
    //     setT2AnimationClass('rotateLeft'); // Apply animation class for t2
    //     setAnimationDirection('left'); // Set animation direction to left
    //     setCarAnimationClass('slideRight'); // Apply animation class for Car_must returning to start
    //     setT1AnimationClass('rotateRight'); // Apply animation class for t1 returning to start
    //     setT2AnimationClass('rotateRight'); // Apply animation class for t2 returning to start
    // };

    
    return(
      <>
        <MdOutlineArrowBackIosNew className="Arrow" id="left_arrow" 
        // onClick={handleLeftArrowClick} 
        />

            <div className={`PageHome ${isDownClicked ? 'down' : ''} ${isUpClicked ? 'up' : ''}`}>
                <h1 className='ford'>FORD</h1>
                <h1 className='must'>MUSTANG</h1>
            </div>
            <div className={`Car_must ${carAnimationClass} ${animationDirection === 'left' ? 'left' : ''} ${animationDirection === 'right' ? 'right' : ''}`}>
                <img src={must} alt="Mustang" />
            </div>
            <img src={mustt1} id='t1' className={`rotate ${t1AnimationClass} ${animationDirection === 'left' ? 'left' : ''} ${animationDirection === 'right' ? 'right' : ''}`} alt="T1" />
            <img src={mustt2} id='t2' className={`rotate ${t2AnimationClass} ${animationDirection === 'left' ? 'left' : ''} ${animationDirection === 'right' ? 'right' : ''}`} alt="T2" />

            <div className='PageHome'>
                <h1 className='ford'>AUDI</h1>
                <h1 className='must'>A3</h1>
            </div>
            <div className="Car_must">
                <img src={audi} alt="Audi" />
            </div>

            <div className='PageHome'>
                <h1 className='ford'>LEXUS</h1>
                <h1 className='must'>LC SERIES</h1>
            </div>
            <div className="Car_must">
                <img src={luxus} alt="Lexus" />
            </div>

        <MdArrowForwardIos className="Arrow" id="right_arrow" onClick={handleDownArrowClick} />


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