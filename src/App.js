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

class App extends Component {

  constructor(){
    super();
    this.state = {
      windowSelection: 1
    }

    this.ChangeSiteIt = this.ChangeSiteIt.bind(this)
    this.ChangeSiteGraphic = this.ChangeSiteGraphic.bind(this)
  }

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
            <Header />
            <ChangeSite changeSiteGraphic={this.ChangeSiteGraphic}/>
            <EntryContent />
            <Gallery />
            <Skills />
            <Footer />
          </div>
        </div>
      )
    } else if(this.state.windowSelection === 3){
    return (
      <div className='App'>
        <div className="GraphicSection">
          <Header />
          <ChangeSite changeSiteIt={this.ChangeSiteIt}/>
          <EntryContent />
          <Gallery />
          <Skills />
          <Footer />
        </div>
      </div>
    );
    }
  }

  ChangeSiteIt() {
    this.setState({windowSelection: 2})
    console.log('it');
  }
  ChangeSiteGraphic() {
    this.setState({windowSelection: 3})
    console.log('grap');
  }

}


export default App;
