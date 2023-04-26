import React from "react";
import './EntryContent.css';
import ladyCharacter from '../../img/ladyCharacter.png';
import cloud from '../../img/cloud-01.png'

function EntryContent() {
    return(
        <div className="EntryContent">
            <h1>Hej, mam na imię Ola</h1>
            <p>ukończyłam studia na kierunku Architektura Wnętrz, jednak moją pasją jest grafika komputerowa, którą od dawna zajmuję się hobbystycznie, a od ponad roku – również komercyjnie.</p>
            <a>PRZEWIŃ NA DÓŁ, BY ZOBACZYĆ WIĘCEJ</a>
            <div className="EntryImage">
                <svg viewBox="0 0 843 606" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="844px" height="606px" preserveAspectRatio='xMinYMin meet' id="blobSvg"><image x="0" y="0" width="843px" height="606px" clipPath="url(#shape)" href="https://i.imgur.com/ljdKiW8.png" preserveAspectRatio="none"></image>	
                    <clipPath id="shape">
                    <path fill="url(#gradient)">
                        <animate attributeName="d"
                            dur="10000ms"
                            repeatCount="indefinite"
                            values="
                            M843,0v555c0,0-57-20-103-20s-102.093,28.582-165,32c-61.045,3.316-159.262-11.407-259.262-57.407s-130.789-119.46-136.789-175.46s-27.934-104.025-79.488-131.511C99.461,202.622,26,185,5,66C5,66-5,0,29,0S843,0,843,0z;
                            M843,0v560c0,0-60-68-106-68s-94.093,41.583-157,45c-61.045,3.316-146-3-246-49s-107-98-113-154s10-182-90-168c0,0-74.223,9-108.223-73C22.777,93,5,0,39,0S843,0,843,0z;
                            M843,0v560c0,0-60-41-106-41s-97.093,37.582-160,41c-61.045,3.316-167-7-267-53S194,399,188,343s5-159-61-132c0,0-115.596,61-115-57C12,154,5,0,39,0S843,0,843,0z;
                            M843,0v555c0,0-57-20-103-20s-102.093,28.582-165,32c-61.045,3.316-159.262-11.407-259.262-57.407s-130.789-119.46-136.789-175.46s-27.934-104.025-79.488-131.511C99.461,202.622,26,185,5,66C5,66-5,0,29,0S843,0,843,0z;                        
                        "></animate>
                    </path></clipPath>
                </svg>
                <div className="cloud" style={{ display: "" }}>
                    <img src={cloud} />
                    <p className="cloudText">Kliknij na mnie,<br />by przejść do sekcji<br />"Drugiej22" 🚀</p>
                </div>
			    <img src={ladyCharacter} />

                <svg viewBox="0 0 807 412" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="807px" height="412px"  id="ladyAreaClick">
                    <path 
                        fill="transparent"  
                        d="M67,63L9,80l-9,34l20,27l20,9l16,20l11,5l58-17l30-3l78,20c0,0,74,16,79,16s80,40,80,40s40,35,42,38
	                    s67,75,67,75l68,52h38l31,8l77,8l11-20l-33-23l61,8l31-1l15-25l7-13l-69-21l-6-13l-90,7h-43l-52-25l-56-77l28-11l7-4l-43-30h18
	                    l-29-23l-24-25l-40-6l-66-39l-42-21l-54-5h-27h-23l-56-7L97,49L77,0L67,16V63z"
                    />
                </svg>
		    </div>
        </div>
    )
}

export default EntryContent;