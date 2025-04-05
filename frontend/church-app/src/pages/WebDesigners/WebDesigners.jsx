import "./WebDesigners.css"
import "./MobileWebDesigners.css"

import { useEffect, useRef } from "react";

import nolan from "../../assets/designerAssets/nolanKern.jpg"
import nolan2 from "../../assets/designerAssets/nolanKern2.jpg"
import owen from "../../assets/designerAssets/owenReynolds.jpg"
import enoch from "../../assets/designerAssets/enochOye.jpg"
import webVid from "../../assets/designerAssets/webDevsHeader.mp4"
import blueVid from "../../assets/designerAssets/blueHeader.mp4"
import liLogo from "../../assets/designerAssets/linkedin.png"

export default function WebDesigners() {
    const videoRef = useRef(null); 

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2; 
        }
    }, []);
    return(
        <>
        <div className="designerHeader">
        <video 
    className="vidWebDevs" 
    src={blueVid} 
    autoPlay 
    loop 
    muted 
    playsInline 
    disablePictureInPicture 
    controlsList="nodownload nofullscreen noplaybackrate"
></video>
            <h1>Web Designers</h1>
        </div>
        <div className="webMain">
            <div className="webContainer">
                <div className="web1">
                <img src={nolan2} alt="Nolan Kern" className="webImage"/>
                <h2>Nolan Kern</h2>
                <a className="liLogo" href="https://www.linkedin.com/in/nolan-kern25/" target="_blank" rel="linkednInNolan">
                <img src={liLogo} alt="Nolan" />
                </a>
                </div>
                <div className="web2">
                <img src={enoch} alt="Enoch Oye" className="webImage"/>
                <h2>Enoch Oye</h2>
                <a className="liLogo" href="https://www.linkedin.com/in/enoch-oye-110800338/" target="_blank" rel="linkednInEnoch">
                <img src={liLogo} alt="Enoch" />
                </a>
                </div>
                <div className="web3">
                <img src={owen} alt="Owen Reynolds" className="webImage"/>
                <h2>Owen Reynolds</h2>
                <a className="liLogo" href="https://www.linkedin.com/in/owen-reynolds-b8870a293/" target="_blank" rel="linkednInOwen">
                <img src={liLogo} alt="Owen" />
                </a>
                </div>
            </div>
        </div>

    </>
    );
}