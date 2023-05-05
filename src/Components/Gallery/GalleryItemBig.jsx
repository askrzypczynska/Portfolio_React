import React from "react";
import "./Gallery.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faXmark} from '@fortawesome/free-solid-svg-icons'

function GalleryItemBig(props){
    const handleCloseModal = props.onClose;
    const prevSlide = props.prevBtn;
    const nextSlide = props.nextBtn;

    const galleryGraphImages = props.galleryGraphImages;
    

    return(
        <div className="GalleryItemBig">
            <div className="GalleryItemBigBox">
                <FontAwesomeIcon icon={faXmark} className="btnClose" onClick={handleCloseModal}/>
                <FontAwesomeIcon icon={faChevronLeft} className="btnPrev" onClick={prevSlide}/>
                <FontAwesomeIcon icon={faChevronRight} className="btnNext" onClick={nextSlide}/>
                <div className="imgBorder">
                    <img src={props.img} alt="" />
                </div>
                
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default GalleryItemBig;
