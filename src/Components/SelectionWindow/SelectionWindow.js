import './SelectionWindow.css';
import planetIt from '../../img/planetIT.png';
import planetGraph from '../../img/planetGraph.png';
import React from 'react';

function SelectionWindow(params) {


    return (
        <div className='SelectionWindow'>
            <h1>Witaj!</h1> 
            <span>
                Jako grafik i programista, przygotowałam dla Ciebie dwie odrębne sekcje portfolio, które reprezentują moje projekty z obu dziedzin. Jestem przekonana, że moje portfolio przyciągnie Waszą uwagę i zainspiruje do dalszej współpracy.
            </span>
            <div className='contentGalactic'>
                <div className='planet' onClick={params.changeSiteIt}>
                    <p>IT</p>
                    <img src={planetIt} alt="Blue planet"/>
                </div>
                <div className='orbit'>
                    <div className='moon' onClick={params.changeSiteGraphic}>
                        <p>Grafika</p>
                        <img src={planetGraph} alt="Violet small moon"/>
                    </div>
                </div>
            </div>
            {/* ----------- Blob on bottom-left ------------ */}
            <div className="blob">
                <svg viewBox="0 0 1500 389" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1500px" height="389px" preserveAspectRatio='none' id="blobSvg"><image x="0" y="0" width="1500px" height="891px" clipPath="url(#shape)" href="https://i.imgur.com/kwYb4Xq.png" preserveAspectRatio="none"></image>	
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: "rgb(107, 108, 204)"}}></stop>
                            <stop offset="50%" style={{stopColor: "rgb(107, 108, 204)"}}></stop>
                            <stop offset="100%" style={{stopColor: "rgb(118, 52, 195)"}}></stop>
                        </linearGradient>
                    </defs><clipPath id="shape">
                    <path fill="url(#gradient)">
                        <animate attributeName="d"
                            dur="20000ms"
                            repeatCount="indefinite"

                            values="
                            M0,122.992c0,0,232.891-100.917,366.967,41.998c134.076,142.916,347.831,31.498,431.979,31.498c139.493,0,303.464,75.423,383.981,175.491s65.996,111.055,86.995,111.055S0,483.034,0,483.034V122.992z;
                            M0,181.489c0,0,244.891-211.911,378.967-68.996c134.076,142.916,335.831,116.994,419.979,116.994c139.493,0,349.961,51.424,430.478,151.492s19.499,102.055,40.498,102.055S0,483.034,0,483.034V181.489z;
                            M0,115.493c0,0,192.393-106.917,326.469,35.998c134.076,142.916,383.829,134.993,467.977,134.993c139.493,0,370.961-89.569,451.478,10.499s2.999,186.051,23.998,186.051S0,483.034,0,483.034V115.493z;
                            M0,61.496c0,0,264.39-42.42,398.466,100.495c134.076,142.916,252.995,178.491,395.98,124.494c130.498-49.281,328.963-22.072,409.48,77.996s44.997,118.554,65.996,118.554S0,483.034,0,483.034V61.496z;
                            M0,122.992c0,0,232.891-100.917,366.967,41.998c134.076,142.916,347.831,31.498,431.979,31.498c139.493,0,303.464,75.423,383.981,175.491s65.996,111.055,86.995,111.055S0,483.034,0,483.034V122.992z;
                        "></animate>
                    </path></clipPath>
                </svg>
            </div>
            {/* ----------- Blob on top-right ------------ */}
            <div className="blob2">
                <svg viewBox="0 0 567 266" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="567px" height="266px" preserveAspectRatio='none' id="blobSvg"><image x="0" y="0" width="567px" height="266px" clipPath="url(#shape2)" href="https://i.imgur.com/eR08SjU.png" preserveAspectRatio="none"></image>	
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: "rgb(107, 108, 204)"}}></stop>
                            <stop offset="50%" style={{stopColor: "rgb(107, 108, 204)"}}></stop>
                            <stop offset="100%" style={{stopColor: "rgb(118, 52, 195)"}}></stop>
                        </linearGradient>
                    </defs><clipPath id="shape2">
                    <path fill="url(#gradient)">
                        <animate attributeName="d"
                            dur="15000ms"
                            repeatCount="indefinite"

                            values="
                            M112,52c0,0,40.834,126.415,99,144c86,26,218.03-88.436,280-36c61.97,52.436,120.629,106.79,120.629,106.79V0H44.101C44.101,0,101.039,31.382,112,52z;
                            M56,65c0,0,45.384,64.135,106,68.395C256,140,383.03,97.064,445,149.5c61.97,52.436,166.629,117.29,166.629,117.29V0H44.101C44.101,0,38.279,36,56,65z;
                            M93,51c0,0,78,49,159-2c79.742-50.208,154.03,94.564,216,147c61.97,52.436,143.629,70.79,143.629,70.79V0H44.101C44.101,0,38,34,93,51z;
                            M112,52c0,0,40.834,126.415,99,144c86,26,218.03-88.436,280-36c61.97,52.436,120.629,106.79,120.629,106.79V0H44.101C44.101,0,101.039,31.382,112,52z;

                        "></animate>
                    </path></clipPath>
                </svg>
            </div>

        </div>
    )
}

export default SelectionWindow;