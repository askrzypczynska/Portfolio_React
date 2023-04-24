import './SelectionWindow.css';
import planetIt from '../../img/planetIT.png';
import planetGraph from '../../img/planetGraph.png';


function SelectionWindow() {
    return (
        <div className='SelectionWindow'>
            <h1>Witaj!</h1> 
            <span>
                Jako grafik i programista, przygotowałam dla Ciebie dwie odrębne sekcje portfolio, które reprezentują moje projekty z obu dziedzin. Jestem przekonana, że moje portfolio przyciągnie Waszą uwagę i zainspiruje do dalszej współpracy.
            </span>
            <div className='contentGalactic'>
                <div className='planet'>
                    <p>IT</p>
                    <img src={planetIt} />
                </div>
                <div className='orbit'>
                    <p>Grafika</p>
                    <img src={planetGraph} />
                </div>

            </div>
        </div>
    )
}

export default SelectionWindow;