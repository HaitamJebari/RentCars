import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import './Home.css';
import must from '../../assets/must.png';
import mustt1 from '../../assets/must_tire1.png';
import mustt2 from '../../assets/must_tire2.png';
import audi from '../../assets/audi.png';
import audi1 from '../../assets/audi_tire1.png';
import audi2 from '../../assets/audi_tire2.png';
import luxus from '../../assets/luxus.png';
import luxus1 from '../../assets/luxus_tire1.png';
import luxus2 from '../../assets/luxus_tire2.png';



function Home() {
    // Cars array containing car information
    const cars = [
        {
            name: "FORD MUSTANG",
            img: must,
            tires: [mustt1, mustt2],
            backgroundColor: "#4f749e"
        },
        {
            name: "AUDI A3",
            img: audi,
            tires: [audi1, audi2], // Replace with Audi tire images if available
            backgroundColor: "#cbcbce"

        },
        {
            name: "LUXUS LC\nSERIES",
            img: luxus,
            tires: [luxus1, luxus2] ,
            backgroundColor: "#b00937"
        },

        // Add more cars here
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // Current car index
    const [animationClass, setAnimationClass] = useState(""); // Animation class

    // Function to handle right arrow click
    const handleRightClick = () => {

    setAnimationUp('right');       // Apply 'right' animation
    setIsClickedLeft('LeftSlide'); // Apply 'LeftSlide' animation
    setRotateLeft('rotateLeft');   // Apply 'rotateLeft' animation
    setRotatetoleft('rotateToLeft');

    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cars.length); // Move to next car
    }, 1000); // Match animation duration

    setTimeout(() => {
        // Reset animations after they finish
        setAnimationUp('');
        setIsClickedLeft('');
        setRotateLeft('');
    }, 950); 
    };



    // Function to handle left arrow click
    const handleLeftClick = () => {
        setAnimationClass("slideRight"); // Add slide-right animation
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length); // Navigate to previous car
            setAnimationClass(""); // Reset animation
        }, 500); // Match animation duration
    };

    // Current car details
    const currentCar = cars[currentIndex];


    const [IsClickedUp,setIsClickedUp] = useState(false);
    const [AnimationUp,setAnimationUp] = useState('');

    const[IsClickedLeft,setIsClickedLeft]=useState("");
    const[IsClickedFirstLeft,setIsClickedFirstLeft]=useState(true);//this
    const[AnimationDown,setAnimationDown] = useState('');
    const[IsClickedRight,setIsClickedRight]=useState("");
    const[RotateRight,setRotateRight]=useState("");
    const[RotateLeft,setRotateLeft]=useState("");
    const[Rotatetoleft,setRotatetoleft]=useState("");

    return (
        <>
            <div className='vide'></div>

            {/* Car Title */}
            <div className={`Title-info ${IsClickedFirstLeft ? "left" : ""} ${AnimationUp} ${AnimationDown}`}>
                <h1 className='ford'>{currentCar.name.split(' ')[0]}</h1>
                <h1 className='must'>{currentCar.name.split(' ')[1]}</h1>
            </div>

            {/* Car Display */}
            <div className={`Car_must ${currentCar.name === "AUDI A3" ? "audi-style" : ""}  ${currentCar.name === "LUXUS LC\nSERIES" ? "luxus-style" : ""} ${IsClickedFirstLeft ? "FirstLeftSlide" : ""} ${IsClickedLeft} ${IsClickedRight}`}>
                <img src={currentCar.img} className='Mustang' alt={currentCar.name} />
                <div className='Tires'>
                    <img src={currentCar.tires[0]}  className={`t1 ${currentCar.name === "AUDI A3" ? "audi-tire1" : ""} ${currentCar.name === "LUXUS LC\nSERIES" ? "luxus_tire1" : ""} ${IsClickedFirstLeft ? "rotateLeft" : ""} ${RotateLeft} ${Rotatetoleft} ${RotateRight}`} alt="Tire 1" />
                    <img src={currentCar.tires[1]} className={`t2 ${currentCar.name === "AUDI A3" ? "audi-tire2" : ""} ${currentCar.name === "LUXUS LC\nSERIES" ? "luxus_tire2" : ""} ${IsClickedFirstLeft ? "rotateLeft" : ""} ${RotateLeft} ${Rotatetoleft} ${RotateRight}`} alt="Tire 2" />
                </div>
            </div>


            {/* Left Arrow */}
            <MdOutlineArrowBackIosNew className="Arrow" id="left_arrow" onClick={handleLeftClick} />

            
            {/* Right Arrow */}
            <MdArrowForwardIos className="Arrow" id="right_arrow" onClick={handleRightClick} />




           



            {/* Social Icons */}
            <div className='icons'>
                <a href="https://www.facebook.com/haitameljebari" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/haitameljebari" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com/haitameljebari" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.pinterest.com/haitameljebari" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPinterest} />
                </a>
            </div>
            <div className='buttons'> 
               <button type="button" className={`rent fade-in`} style={{ backgroundColor: currentCar.backgroundColor , animation:'opacity:1'}}>Rent Now</button>
               <button type="button" className="det">Details</button>
            </div>
        
        </>
    );
}

export default Home;
