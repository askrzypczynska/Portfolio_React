import './App.css';
import React, {Component} from 'react';
import SelectionWindow from './Components/SelectionWindow/SelectionWindow';
import Header from './Components/Header/Header'
import EntryContent from './Components/EntryContent/EntryContent';
import Gallery from './Components/Gallery/Gallery';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import ChangeSite from './Components/ChangeSite/ChangeSite';
import {GraphicContent, ItContent} from './Components/ContentVariants/ContentVariants'
import Loader from './Components/Loader/Loader';

class App extends Component {

  constructor(){
    super();
    this.state = {
      windowSelection: 1,
      isLoading: true,
    }



    this.ChangeSiteIt = this.ChangeSiteIt.bind(this)
    this.ChangeSiteGraphic = this.ChangeSiteGraphic.bind(this)
  }

  componentDidMount() {
    let tmp = this.state;
    tmp.isLoading = false;
    this.setState(tmp);
  };

  render() {

    if (this.state.windowSelection === 1) {
      return (
        <div className='App'>
          <SelectionWindow changeSiteIt={this.ChangeSiteIt} changeSiteGraphic={this.ChangeSiteGraphic}/>
        </div>
      )
    } else if(this.state.windowSelection === 2){
      return (
        <div className='App'>
          <div className="ItSection">
            <Loader isLoading={this.state.isLoading}/>
            <Header />
            <ChangeSite changeSiteGraphic={this.ChangeSiteGraphic} buttonText={ItContent.buttonText}/>
            <EntryContent entryContentText={ItContent.entryContentText} backgroundImage={ItContent.backgroundImage}/>
            <Gallery windowSelection={2}/>
            <Skills imgSkills={ItContent.imgSkills} skillsText={ItContent.skillsText}/>
            <Footer footerColor={ItContent.footerColor}/>
          </div>
        </div>
      )
    } else if(this.state.windowSelection === 3){
    return (
      <div className='App'>
        <div className="GraphicSection">
          <Loader isLoading={this.state.isLoading}/>
          <Header />
          <ChangeSite changeSiteIt={this.ChangeSiteIt} buttonText={GraphicContent.buttonText}/>
          <EntryContent entryContentText={GraphicContent.entryContentText} backgroundImage={GraphicContent.backgroundImage}/>
          <Gallery windowSelection={3}/>
          <Skills imgSkills={GraphicContent.imgSkills} skillsText={GraphicContent.skillsText}/>
          <Footer footerColor={GraphicContent.footerColor}/>
        </div>
      </div>
    );
    }
  }

  ChangeSiteIt() {
    let tmp = this.state;
    tmp.windowSelection = 2;
    tmp.isLoading = true;
    this.setState(tmp)

    setTimeout(() => {
      let tmp = this.state;
      tmp.isLoading = false;
      this.setState(tmp);
    }, 1500);
  }
  ChangeSiteGraphic() {
    let tmp = this.state;
    tmp.windowSelection = 3;
    tmp.isLoading = true;
    this.setState(tmp)

    setTimeout(() => {
      let tmp = this.state;
      tmp.isLoading = false;
      this.setState(tmp);
    }, 1500);
  }

}


export default App;
