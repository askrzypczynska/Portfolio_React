import React, {useEffect} from "react";
import "./Gallery.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faXmark} from '@fortawesome/free-solid-svg-icons'
import Loader from "../Loader/Loader";

function GalleryItemBig(props){
    const handleCloseModal = props.onClose;
    const prevSlide = props.prevBtn;
    const nextSlide = props.nextBtn;

    //For firefox border is off
    useEffect(() => {
        const isFirefox = typeof InstallTrigger !== 'undefined'; 
        if (isFirefox) {
          const style = document.createElement('style');
          style.innerHTML = '.GalleryItemBigBox .imgBorder { border: none; }';
          document.head.appendChild(style);
        }
    })

    return(
        <div className="GalleryItemBig">
            <div className="GalleryItemBigBox">
                <FontAwesomeIcon icon={faXmark} className="btnClose" onClick={handleCloseModal}/>
                <FontAwesomeIcon icon={faChevronLeft} className="btnPrev" onClick={prevSlide}/>
                <FontAwesomeIcon icon={faChevronRight} className="btnNext" onClick={nextSlide}/>
                <div className="imgBorder">
                    {props.isLoading && <Loader isLoading={true}/>}
                    <img src={props.img} alt="Portfolio works" onLoad={() => props.setIsLoading(false)}/>
                </div>
                <p dangerouslySetInnerHTML={{ __html: props.description}}></p>
            </div>
        </div>
    )
}

export default GalleryItemBig;
