import galleryGraphImages from "./urls"
import galleryItImages from "./urlsIt"
import React, { useState } from "react";
import "./Gallery.css"
import GalleryItemBig from "./GalleryItemBig";

function Gallery(props){

    const [sildeIndex, setSlideIndex] = useState(null);
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideIndex(index)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setSlideIndex(null)
        setOpenModal(false)
    }

    const prevSlide = () => {
        sildeIndex === 0 ? setSlideIndex( galleryGraphImages.length - 1) : setSlideIndex( sildeIndex - 1)
    }
    const nextSlide = () => {
        sildeIndex + 1 === galleryGraphImages.length ? setSlideIndex(0) : setSlideIndex(sildeIndex + 1)
    }    


    return(
        <div className="Gallery">

            {openModal && sildeIndex !== null && (
                <GalleryItemBig  
                    img={galleryGraphImages[sildeIndex].imgMax} 
                    description={galleryGraphImages[sildeIndex].imgDestcription}
                    onClose={handleCloseModal}
                    prevBtn={prevSlide}
                    nextBtn={nextSlide}
                />
            )}

            {galleryGraphImages && galleryGraphImages.map((slide, index) => {
                    return(
                        <div 
                            className="single" 
                            key={index}
                            onClick={() => handleOpenModal(index)}
                        >
                            <img src={slide.imgMin} alt="" referrerPolicy="no-referrer"/>
                        </div>
                    )
            })}
        </div>
    )
}

export default Gallery;
