import './GraphicSection.css';
import React from 'react';
import Header from '../Header/Header';
import EntryContent from '../EntryContent/EntryContent';
import Gallery from '../Gallery/Gallery';

function GraphicSection() {

    return (
        <div className='GraphicSection'>
            <Header />
            <EntryContent />
            <Gallery />
        </div>
    )
}

export default GraphicSection;