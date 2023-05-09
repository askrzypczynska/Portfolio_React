import './ChangeSite.css';
import React, {useEffect, useRef, useState} from 'react';

function ChangeSite({ buttonText, changeSiteIt, changeSiteGraphic}) {
    const [bottomOffset, setBottomOffset] = useState(20);
    const buttonRef = useRef(null);
  
    useEffect(() => {
      function handleScroll() {
        const buttonHeight = buttonRef.current.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        // On top of the page
        if (scrollPosition <= window.innerHeight) {
          setBottomOffset(20);
        }
        // On bottom of the page
        else if (scrollPosition >= documentHeight * 0.9) {
            let tmp = 0;
            if(window.innerWidth <= 1300){
                tmp = 30;
            }
          setBottomOffset((scrollPosition * 0.6 - buttonHeight * 0.5) - documentHeight * 0.5 + tmp);
        }
        // Otherwise, keep the button at its default position (20px from bottom)
        else {
          setBottomOffset(20);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if(buttonText === "portfolio IT"){
        return (
            <div className='ChangeSite' onClick={changeSiteIt} ref={buttonRef} style={{bottom: bottomOffset}}>
                🚀 <br/> Kliknij mnie <br/>aby przejść <br/>do {buttonText}
            </div>
        )
    } else {
        return (
            <div className='ChangeSite' onClick={changeSiteGraphic} ref={buttonRef} style={{bottom: bottomOffset}}>
                🚀 <br/> Kliknij mnie <br/>aby przejść <br/>do {buttonText}
            </div>
        )
    }
}

export default ChangeSite;