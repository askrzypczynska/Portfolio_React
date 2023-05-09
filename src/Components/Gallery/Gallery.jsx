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
        if(props.windowSelection === 2){
            sildeIndex === 0 ? setSlideIndex( galleryItImages.length - 1) : setSlideIndex( sildeIndex - 1)
        } else{
            sildeIndex === 0 ? setSlideIndex( galleryGraphImages.length - 1) : setSlideIndex( sildeIndex - 1)
        }
    }
    const nextSlide = () => {
        if(props.windowSelection === 2){
            sildeIndex + 1 === galleryItImages.length ? setSlideIndex(0) : setSlideIndex(sildeIndex + 1)
        } else{
            sildeIndex + 1 === galleryGraphImages.length ? setSlideIndex(0) : setSlideIndex(sildeIndex + 1)
        }
    }    

    // -------- It gallery -------- //
    if(props.windowSelection === 2){
        return(
            <div className="Gallery">
    
                {openModal && sildeIndex !== null && (
                    <GalleryItemBig  
                        img={galleryItImages[sildeIndex].imgMax} 
                        description={galleryItImages[sildeIndex].imgDestcription}
                        onClose={handleCloseModal}
                        prevBtn={prevSlide}
                        nextBtn={nextSlide}
                    />
                )}
    
                {galleryItImages && galleryItImages.map((slide, index) => {
                        return(
                            <div 
                                className="single" 
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img src={slide.imgMin} className="singleImgIt" alt="" referrerPolicy="no-referrer"/>
                            </div>
                        )
                })}
            </div>
        )
    } else{
        // -------- Graphic gallery -------- //
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
                                <img src={slide.imgMin} className="singleImg" alt="" referrerPolicy="no-referrer"/>
                            </div>
                        )
                })}
            </div>
        )
    }
}

export default Gallery;
