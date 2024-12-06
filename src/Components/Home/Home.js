import React, { useEffect, useState } from 'react';
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
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import fuel from '../../assets/fuel.png';
import oil from '../../assets/oil.png';
import chair from '../../assets/chair.png';



function Home() {
    // Cars array containing car information
    const cars = [
        {
            name: "FORD MUSTANG",
            img: must,
            tires: [mustt1, mustt2],
            backgroundColor: "#4f749e",
            gallery:[img2,img2,img2,img2]
        },
        {
            name: "AUDI A3",
            img: audi,
            tires: [audi1, audi2], // Replace with Audi tire images if available
            backgroundColor: "#cbcbce",
            gallery:[img1,img1,img1,]
        },
        {
            name: "LUXUS LC\nSERIES",
            img: luxus,
            tires: [luxus1, luxus2] ,
            backgroundColor: "#b00937",
            gallery:[img3,img3]
        },

        // Add more cars here
    ];
 

    const [currentIndex, setCurrentIndex] = useState(0); // Current car index
    const [animationClass, setAnimationClass] = useState(""); // Animation class

    // Function to handle right arrow click
    const handleRightClick = () => {

    setAnimationUp('right');       // Apply 'right' animation
    setIsClickedLeft('LeftSlide'); // Apply 'LeftSlide' animation
    setRotatetoleft('rotateToLeft');

    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cars.length); // Move to next car
    }, 1000); // Match animation duration

    setTimeout(() => {
        // Reset animations after they finish
        setAnimationUp('');
        setIsClickedLeft('');
        setRotatetoleft('');
    }, 950); 
    };



    // Function to handle left arrow click
    const handleLeftClick = () => {
        setAnimationUp('right'); 
        setIsClickedFirstLeft('down');
        setAnimationClass("slideRight"); // Add slide-right animation
        setRightSlide('RightSlide');

        
        setRotatetoCenterTwo("rotateToRight");

        // setLeftoRight("lefttoright");


        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length); // Navigate to previous car
            setAnimationUp(''); 
            // setDowntwo('downtwo'); 


            // setRotatetoCenterTwo("");

            setRotatetoCenterTwo("rotateToRight");
            setNewAnimationClass('slide-left-in'); /* newwwww */
            setIsClickedLeft('');
            setAnimationClass(''); // Reset animation
            setRightSlide('');
            
  
        }, 2500); // Match animation duration

        /* newwwww */
        setTimeout(() => {
            setNewAnimationClass('');
            //  setDowntwo(''); 
             setRotatetoCenterTwo('');

        }, 2000);
        /* newwwww */
    };


const handleDetailsClick = () =>{
     setbuttonsDown('buttDown');
     seticonsLeft('iconsLeft');
     setarrowRightRight('arrowRightRight');
     setarrowLeftUp('arrowLeftUp');
     setvideUp('videUp');
     setCarCss('CarCss');
     setarrowHide('arrowHide');
     setarrowTwo('arrowTwo');
     setShowGallery('ShowGallery');
     setShowSpecs('ShowSpecs');

     
}


    // Current car details
    const currentCar = cars[currentIndex];


    const[buttonsDown,setbuttonsDown] = useState('');
    const[iconsLeft,seticonsLeft] = useState('');
    const[arrowRightRight,setarrowRightRight] = useState('');
    const[arrowLeftUp,setarrowLeftUp] = useState('');
    const[videUp,setvideUp] = useState('');
    const[CarCss,setCarCss] = useState('');
    const[arrowHide,setarrowHide] = useState('');
    const[arrowShow,setarrowShow] = useState('');
    const[arrowTwo,setarrowTwo] = useState('');
    const[ShowGallery,setShowGallery] = useState('');
    const[ShowSpecs,setShowSpecs] = useState('');


const handleback = () =>{
    setbuttonsDown('');
    seticonsLeft('');
    setarrowRightRight('');
    setarrowLeftUp('');
    setvideUp('');
    setCarCss('');
    setShowGallery('');
    setShowSpecs('');

}






    const[NewAnimationClass,setNewAnimationClass] = useState('');




    const [AnimationUp,setAnimationUp] = useState('');

    const[IsClickedLeft,setIsClickedLeft]=useState();


    const[IsClickedFirstLeft,setIsClickedFirstLeft]=useState(true);//Animation down for the Title



    const[RotatetoCenterTwo,setRotatetoCenterTwo]=useState(true);//Animation down for the Title
 


    const[RotateTocenter,setRotateTocenter]=useState(true);//Rotate Tires from right to center



    const[IsClickedRight,setIsClickedRight]=useState("");

    const[Rotatetoleft,setRotatetoleft]=useState("");


    const[RightSlide,setRightSlide]=useState("");




    return (
        <>
            <div className={`vide ${videUp}`}></div>


                    {/* Car Title */}
                    <div className={`Title-info ${CarCss}  ${IsClickedFirstLeft ? "down" : ""} ${AnimationUp}`}>
                        <h1 className='ford'>{currentCar.name.split(' ')[0]}</h1>
                        <h1 className='must'>{currentCar.name.split(' ')[1]}</h1>
                    </div>

                    {/* Car Display */}
                    <div className={`Car_must ${CarCss} ${currentCar.name === "AUDI A3" ? "audi-style" : ""}  ${currentCar.name === "LUXUS LC\nSERIES" ? "luxus-style" : ""}  ${IsClickedFirstLeft ? "FirstLeftSlide" : ""} ${NewAnimationClass} ${RightSlide} ${IsClickedLeft} ${IsClickedRight}`} onClick={handleDetailsClick}>
                        <img src={currentCar.img} className='Mustang' alt={currentCar.name} />
                        <div className='Tires'>
                            <img src={currentCar.tires[0]}  className={`t1 ${RotateTocenter ? "rotatetocenter" : ""} ${RotatetoCenterTwo}  ${currentCar.name === "AUDI A3" ? "audi-tire1" : ""} ${currentCar.name === "LUXUS LC\nSERIES" ? "luxus_tire1" : ""}   ${Rotatetoleft} `} alt="Tire 1" />
                            <img src={currentCar.tires[1]} className={`t2 ${RotateTocenter ? "rotatetocenter" : ""} ${RotatetoCenterTwo} ${currentCar.name === "AUDI A3" ? "audi-tire2" : ""} ${currentCar.name === "LUXUS LC\nSERIES" ? "luxus_tire2" : ""}   ${Rotatetoleft} `} alt="Tire 2" />
                        </div>
                    </div>

            {/* Left Arrow */}
            <MdOutlineArrowBackIosNew className={`Arrow ${arrowLeftUp} ${arrowHide}`} id="left_arrow" onClick={handleLeftClick} />
            <MdOutlineArrowBackIosNew className={`Arrow ${arrowTwo} ${arrowShow}`} id="left_arrow" onClick={handleback} />

            
            {/* Right Arrow */}
            <MdArrowForwardIos className={`Arrow ${arrowRightRight}`} id="right_arrow" onClick={handleRightClick} />




           



            {/* Social Icons */}
            <div className={`icons ${iconsLeft}`}>
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
            <div className={`buttons ${buttonsDown}`}> 
               <button type="button" className={`rent fade-in`} style={{ backgroundColor: currentCar.backgroundColor }} >Rent Now</button>
               <button type="button" className="det" onClick={handleDetailsClick} >Details</button>
            </div>
 


{/* The information in here must be dynamic */}

            <div className={`specs ${ShowSpecs}`}>

                    <ul>
                    <h4>SPECS</h4>
                        <li>
                            <img src={fuel}/>
                            <h3>500KM</h3>
                            <p>GAS</p>             
                        </li>
                            <li>

                            <img src={chair}/>
                              <h3>4</h3>
                              <p> SEATS</p>
                            </li>
                        <li>
                        <img src={oil}/>
                           <h3>335</h3> 
                           <p>HORSE POWER</p> 
                            
                        </li>
       
                           
                    </ul>
            </div>
{/* -------------------------------------------------- */}


            <div className={`gallery ${ShowGallery}`}>
                <h3>TAKE A LOOK</h3>
                    <ul>
                        <li style={{ display:"flex" }}>
                        {currentCar.gallery.map((imgs,index)=>(
                            <div key={index} className="img_g">
                                    <img  src={imgs} />
                            </div>
                            ))}
                        
                        </li>     


                    </ul>
                    <button type="button" className="rent_two" style={{ backgroundColor: currentCar.backgroundColor  }} >Rent Now</button>

            </div>
        
        </>
    );
}

export default Home;
