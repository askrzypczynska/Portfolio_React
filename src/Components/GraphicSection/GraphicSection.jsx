import './GraphicSection.css';
import React from 'react';
import Header from '../Header/Header';
import EntryContent from '../EntryContent/EntryContent';
import Gallery from '../Gallery/Gallery';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import ChangeSite from '../ChangeSite/ChangeSite';

function GraphicSection() {

    return (
        <div className='GraphicSection'>
            <Header />
            <ChangeSite/>
            <EntryContent />
            <Gallery />
            <Skills />
            <Footer />
        </div>
    )
}

export default GraphicSection;