import React , { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram, faTwitter, faPinterest , faArrowAltCircleLeft} from '@fortawesome/free-brands-svg-icons';
import { MdArrowForwardIos , MdOutlineArrowBackIosNew } from "react-icons/md";
// import cars from '../../data'
import must from '../../assets/must.png'
import mustt1 from '../../assets/must_tire1.png'
import mustt2 from '../../assets/must_tire2.png'
import audi from '../../assets/audi.png'
import luxus from '../../assets/luxus.png'
import './Home.css'
 
function Home() {
    
    // const cars = [
    //     {
    //       title: "FORD",
    //       model: "MUSTANG",
    //       carImage: require("../../assets/must.png"), // Replace with your actual image path
    //       tires: [require("../../assets/must_tire1.png"), require("../../assets/must_tire2.png")],
    //     },
    //     {
    //       title: "AUDI",
    //       model: "A3",
    //       carImage: require("../../assets/audi.png"),
    //       tires: [require("../../assets/must_tire1.png"), require("../../assets/must_tire2.png")], // Use different tire images if needed
    //     },
    //     {
    //       title: "LEXUS",
    //       model: "RX",
    //       carImage: require("../../assets/luxus.png"),
    //       tires: [require("../../assets/must_tire1.png"), require("../../assets/must_tire2.png")],
    //     },
    //   ];
    
    //   const [currentIndex, setCurrentIndex] = useState(0); // Current car index
    //   const [animationClass, setAnimationClass] = useState(""); // Animation class
    
    //   const handleRightClick = () => {
    //     setAnimationClass("slideLeft"); // Trigger slide-left animation
    //     setTimeout(() => {
    //       setCurrentIndex((prev) => (prev + 1) % cars.length); // Move to the next car
    //       setAnimationClass(""); // Reset animation class
    //     }, 1000); // Match the animation duration
    //   };
    
    //   const handleLeftClick = () => {
    //     setAnimationClass("slideRight"); // Trigger slide-right animation
    //     setTimeout(() => {
    //       setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length); // Move to the previous car
    //       setAnimationClass(""); // Reset animation class
    //     }, 1000); // Match the animation duration
    //   };
    
    //   const currentCar = cars[currentIndex];







    
    const [IsClickedUp,setIsClickedUp] = useState(false);
    const [AnimationUp,setAnimationUp] = useState('');

    const[IsClickedLeft,setIsClickedLeft]=useState("");
    const[RotateLeft,setRotateLeft]=useState("");


    const handleRightClick = () =>{

            console.log("Arrow right clicked");


        setTimeout(() => {
            setIsClickedUp(true); // Remove the element after animation
          }, 2000); 
          setIsClickedUp(false);
          setAnimationUp('right');
          setIsClickedLeft('LeftSlide');
          setRotateLeft('rotateLeft');

    }




    const [IsClickedDown,setIsClickedDown] = useState(false);
    const [AnimationDown,setAnimationDown] = useState('');

    const[IsClickedRight,setIsClickedRight]=useState("");
    const[RotateRight,setRotateRight]=useState("");


    const handleLeftClick = () =>{
        console.log("Arrow left clicked");

        setTimeout(() => {
            setIsClickedDown(true); // Remove the element after animation
          }, 2000); 

          setAnimationDown('left');
          setIsClickedRight('RightSlide');
          setRotateRight('rotateRight')
    }
    

    return(
      <>

{/* <div className={`Title-info ${animationClass}`}>
        <h1 className="ford">{currentCar.title}</h1>
        <h1 className="must">{currentCar.model}</h1>
      </div>

      {/* Car Image */}
      {/* <div className={`Car_must ${animationClass}`}>
        <img src={currentCar.carImage} className="Mustang" alt={currentCar.model} />
        <div className="Tires">
          {currentCar.tires.map((tire, index) => (
            <img key={index} src={tire} className="tire" alt={`Tire ${index + 1}`} />
          ))}
        </div>
            
        </div> */} 





{/* First Car */}
      
        <div className='vide'></div>
        <div className={`Title-info ${AnimationUp} ${AnimationDown}`}>
            <h1 className='ford'>FORD</h1>
            <h1 className='must'>MUSTANG</h1>
        </div>
        <div className={`Car_must ${IsClickedLeft} ${IsClickedRight}`}>
          <img src={must} className='Mustang' alt="Mustang" />
             <div className='Tires'>
                 <img src={mustt1} className={`t1 ${RotateLeft} ${RotateRight}`} alt="T1" />
                 <img src={mustt2} className={`t2 ${RotateLeft} ${RotateRight}`} alt="T2" />
             </div>
        </div>
 
{/* First Car */}
{/* Second Car */}
        {/* <div className='vide'></div>
        <div className={`Title-info ${AnimationUp} ${AnimationDown}`}>
            <h1 className='ford'>AUDI</h1>
            <h1 className='must'>A3</h1>
        </div>
        <div className={`Car_must ${IsClickedLeft} ${IsClickedRight}`}>
          <img src={must} className='Mustang' alt="Mustang" />
             <div className='Tires'>
                 <img src={mustt1} className={`t1 ${RotateLeft} ${RotateRight}`} alt="T1" />
                 <img src={mustt2} className={`t2 ${RotateLeft} ${RotateRight}`} alt="T2" />
             </div>
        </div> */}

{/* Second Car */}
            


        
        <MdOutlineArrowBackIosNew className="Arrow" id="left_arrow" onClick={handleLeftClick} />


            


             
        <MdArrowForwardIos className="Arrow" id="right_arrow"  onClick={handleRightClick}/>


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