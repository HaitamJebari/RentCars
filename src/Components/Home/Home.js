import React , { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram, faTwitter, faPinterest , faArrowAltCircleLeft} from '@fortawesome/free-brands-svg-icons';
import { MdArrowForwardIos , MdOutlineArrowBackIosNew } from "react-icons/md";
import must from '../../assets/must.png'
import mustt1 from '../../assets/must_tire1.png'
import mustt2 from '../../assets/must_tire2.png'
import audi from '../../assets/audi.png'
import luxus from '../../assets/luxus.png'
import './Home.css'
 
function Home() {
    
    // const [isDownClicked, setIsDownClicked] = useState(false);
    // const [isUpClicked, setIsUpClicked] = useState(false);
    // const [animationDirection, setAnimationDirection] = useState(''); // State for animation direction
    // const [carAnimationClass, setCarAnimationClass] = useState(''); // State for Car_must animation class
    // const [t1AnimationClass, setT1AnimationClass] = useState(''); // State for t1 animation class
    // const [t2AnimationClass, setT2AnimationClass] = useState(''); // State for t2 animation class


    // const handleRightArrowClick = () => {
    //     setIsUpClicked(!isUpClicked);
    //     setIsDownClicked(false);
    //     setAnimationDirection('left'); // Set animation direction to left
    //     setCarAnimationClass('slideLeft'); // Apply animation class for Car_must
    //     setT1AnimationClass('rotateLeft'); // Apply animation class for t1
    //     setT2AnimationClass('rotateLeft'); // Apply animation class for t2


    // };


 
    
    // const handleLeftArrowClick = () => {
    //     setIsUpClicked(!isUpClicked);
    //     setIsDownClicked(false);
    //     setAnimationDirection('right'); // Set animation direction to right
    //     setCarAnimationClass('slideRight'); // Apply animation class for Car_must
    //     setT1AnimationClass('rotateRight'); // Apply animation class for t1
    //     setT2AnimationClass('rotateRight'); // Apply animation class for t2
    // };
    
    const [IsClicked,setIsClicked] = useState(false);
    const [Animation,setAnimation] = useState('');

    const[IsClickedLeft,setIsClickedLeft]=useState("");
    const[RotateLeft,setRotateLeft]=useState("");


    const handleRightClick = () =>{
        
        setTimeout(() => {
            setIsClicked(true); // Remove the element after animation
          }, 2000); 
          setAnimation('right');
          setIsClickedLeft('LeftSlide');
          setRotateLeft('rotateLeft')
    }


    return(
      <>

      <div className='vide'></div>

      {!IsClicked &&(
        <div className={`Title-info ${Animation}`}>
            <h1 className='ford'>FORD</h1>
            <h1 className='must'>MUSTANG</h1>
        </div>

      )}

        <div className={`Car_must ${IsClickedLeft}`}>
          <img src={must} className='Mustang' alt="Mustang" />
             <div className='Tires'>
                 <img src={mustt1} className={`t1 ${RotateLeft}`} alt="T1" />
                 <img src={mustt2} className={`t2 ${RotateLeft}`} alt="T2" />
             </div>
        </div>
 

            


        
        <MdOutlineArrowBackIosNew className="Arrow" id="left_arrow"  />


            


             
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