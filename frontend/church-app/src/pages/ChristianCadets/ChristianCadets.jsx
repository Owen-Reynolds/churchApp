import './ChristianCadets.css';
import './MobileChristianCadets.css';
import { useState } from "react";
import image1 from '../../assets/cadetAssets/image1.jpeg';
import image2 from '../../assets/cadetAssets/image2.jpeg';
import image3 from '../../assets/cadetAssets/image3.jpeg';
import image4 from '../../assets/cadetAssets/image4.jpeg';
import image5 from '../../assets/cadetAssets/image5.jpeg';
import image6 from '../../assets/cadetAssets/image6.jpeg';
import image7 from '../../assets/cadetAssets/image7.jpeg';
import image8 from '../../assets/cadetAssets/image8.jpeg';
import image9 from '../../assets/cadetAssets/image9.jpeg';
import image10 from '../../assets/cadetAssets/image10.jpeg';
import image11 from '../../assets/cadetAssets/image11.jpeg';
import image12 from '../../assets/cadetAssets/image12.jpeg';
import image13 from '../../assets/cadetAssets/image13.jpeg';
import image14 from '../../assets/cadetAssets/image14.jpeg';    
import Image15 from '../../assets/cadetAssets/Image15.jpg';
import Image16 from '../../assets/cadetAssets/Image16.jpg';
import Image17 from '../../assets/cadetAssets/Image17.jpg';
import Image18 from '../../assets/cadetAssets/Image18.jpg';
import Image19 from '../../assets/cadetAssets/Image19.jpg';
import Image20 from '../../assets/cadetAssets/Image20.jpg';
import Image21 from '../../assets/cadetAssets/Image21.jpg';
import Image22 from '../../assets/cadetAssets/Image22.jpg';
import Image23 from '../../assets/cadetAssets/Image23.jpg';
import Image24 from '../../assets/cadetAssets/Image24.jpg';
import Image25 from '../../assets/cadetAssets/Image25.jpg';
import youthAppForm from '../../assets/cadetAssets/YouthAppForm.pdf';
import releaseLiabilityForm from '../../assets/cadetAssets/ReleaseLiabilityForm.pdf';
import adultVolunteerApp from '../../assets/cadetAssets/AdultVolunteerForm.pdf';
import cc2 from '../../assets/cadetAssets/ccadets2.png';
import youthCrosses from '../../assets/cadetAssets/youthCrosses.png';
import CCHandbook from '../../assets/cadetAssets/CCHandbook.pdf';
import fishKids from   '../../assets/cadetAssets/fishingKids.jpeg';
import banner from '../../assets/cadetAssets/youthBanner4.jpg';


export default function ChristianCadets() {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12,
         image13, image14, Image15, Image16, Image17, Image18, Image19, Image20, Image21, Image22, Image23, Image24, Image25];

    return (
        <>
       <div className="youthPage">
    <div className="youthHeader">
        <h1 className="youthMainText">Christian Cadets</h1>
    </div>
    <div className="youthContainer">
        <div className="youthInfo">
            <img src={cc2} alt="Christian Cadets Logo" />
            <div className="youthText">
                <h1>Christian Cadet Pledge</h1>
                <p>
                    With faith in God, I pledge to uphold the values of honesty, integrity, and compassion. I will strive to follow Christ’s teachings, have a positive impact on my family, community, and nation, serve others selflessly, and lead by example in all that I do. Amen.
                </p>
                <h2>View applications at the bottom of the page</h2>
            </div>
        </div>
        <div className="slider">
    <div className="slide-track">
            {images.map((img, index) => (
                <div className="slide" key={index}>
                    <img src={img} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
        </div>
        <div className="youthContent">
            <div className="youthHandBook">
                <h1>Cadet Handbook</h1>
                <iframe className="youthForm" id="myPDF" src={CCHandbook}></iframe>
                <a href={CCHandbook} target="_blank" rel="noopener noreferrer">
                    <button className="newButtons">Open</button>
                </a>
            </div>
            <div className="youthCard">
            <iframe width="400" height="400" src="https://opturl.com/i/oZLb0Xwq?hide_title=0" frameborder="0"></iframe>
            <img src={fishKids} alt="fishingKids" />
            </div>
        </div>

        <div className="pdf-container">
            <div className="pdfs">
                <div className="pdf-item">
                    <h2>Youth Application Form</h2>
                    <iframe id="myPDF" src={youthAppForm} frameBorder="0"></iframe>
                    <a href={youthAppForm} target="_blank" rel="noopener noreferrer">
                        <button className="newButtons">Open</button>
                
                    </a>
                </div>

                <div className="pdf-item">
                    <h2>Release of Liability Form</h2>
                    <iframe id="myPDF" src={releaseLiabilityForm} frameBorder="0"></iframe>
                    <a href={releaseLiabilityForm} target="_blank" rel="noopener noreferrer">
                        <button className="newButtons">Open</button>
                    </a>
                </div>
                <div className="pdf-item">
                    <h2>Adult Volunteer Application</h2>
                    <iframe id="myPDF" src={adultVolunteerApp} frameBorder="0"></iframe>
                    <a href={adultVolunteerApp} target="_blank" rel="noopener noreferrer">
                        <button className="newButtons">Open</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
           
        </>
    )
}