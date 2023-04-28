import galleryGraphImages from "./urls"
import React, { useState } from "react";
import "./Gallery.css"
import GalleryItemBig from "./GalleryItemBig";

function Gallery(props){

    const [sildeNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    return(
        <div className="Gallery">

            {/* {openModal &&
                <GalleryItemBig key={index}>
                    <img src={slide.imgMax} 
                    alt={slide.imgDestcription} />
                </GalleryItemBig>
            } */}

            {
                galleryGraphImages && galleryGraphImages.map((slide, index) => {
                    return(
                        <div 
                            className="single" 
                            key={index}
                            onClick={ () => handleOpenModal(index) }
                        >
                            <img src={slide.imgMin} alt="" referrerPolicy="no-referrer"/>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Gallery;
