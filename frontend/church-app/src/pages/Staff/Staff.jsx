import React, { useState } from 'react';
import './Staff.css';
import './MobileStaff.css';
import heartrate from '../../assets/staffAssets/heartRateVid.mp4';
import pastorDave from '../../assets/staffAssets/davidKern.webp';
import bobAnderson from '../../assets/staffAssets/bobAnderson.webp';
import dorothyHarvey from '../../assets/staffAssets/dorothyHarvey.webp';
import timMcNamee from '../../assets/staffAssets/timMcNamee.webp';
import rondaKern from '../../assets/staffAssets/rondaKern.webp';
import scottMiller from '../../assets/staffAssets/scottMiller.webp';
import cindyKeeney from '../../assets/staffAssets/cindyKeeney.webp';
import dustyKeeney from '../../assets/staffAssets/dustyKeeney.webp';

export default function AboutUs() {
    const [expandedCard, setExpandedCard] = useState(null);

    return (
        <>
            <div className="staffHeader">
                <video 
                            className="vidGive" 
                            src={heartrate} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            disablePictureInPicture 
                            controlsList="nodownload nofullscreen noplaybackrate"
                        ></video>
                <h1>Meet the Team</h1>
            </div>
            <div className = "staffWave"></div>
            <div className="mainStaffContent">
                <div className="staffCards">
                    <Card
                        image={pastorDave}
                        title="Pastor"
                        description="David Kern"
                        isExpanded={expandedCard === 1}
                        
                    />
                    <Card
                        image={dustyKeeney}
                        title="Associate Pastor"
                        description="Dusty Keeney"
                        isExpanded={expandedCard === 2}
                        onClick={() => setExpandedCard(expandedCard === 2 ? null : 2)}
                        
                    />
                    <Card
                        image={bobAnderson}
                        title="Facility Director"
                        description="Bob Anderson"
                        isExpanded={expandedCard === 3}
                        onClick={() => setExpandedCard(expandedCard === 3 ? null : 3)}
                        
                    />
                    <Card
                        image={cindyKeeney}
                        title="Director of Missions"
                        description="Cindy Keeney"
                        isExpanded={expandedCard === 4}
                        onClick={() => setExpandedCard(expandedCard === 4 ? null : 4)}
                       
                    />
                    <Card
                        image={dorothyHarvey}
                        title="Office Administrator"
                        description="Dorothy Harvey"
                        isExpanded={expandedCard === 5}
                        onClick={() => setExpandedCard(expandedCard === 5 ? null : 5)}
                       
                    />
                    <Card
                        image={rondaKern}
                        title="Youth Director"
                        description="Ronda Kern"
                        isExpanded={expandedCard === 6}
                        onClick={() => setExpandedCard(expandedCard === 6 ? null : 6)}
                       
                    />
                    <Card
                        image={timMcNamee}
                        title="Outreach Director"
                        description="Tim McNamee"
                        isExpanded={expandedCard === 7}
                        onClick={() => setExpandedCard(expandedCard === 7 ? null : 7)}
                       
                    />
                    <Card
                        image={scottMiller}
                        title="Discipleship Director"
                        description="Scott Miller"
                        isExpanded={expandedCard === 8}
                        onClick={() => setExpandedCard(expandedCard === 8 ? null : 8)}
                       
                    />
                     
                </div>
            </div>
        </>
    );
}

function Card({ image, title, description, isExpanded, onClick,}) {
    return (
        <>
        
        <div className="card" onClick={onClick}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={`cardContent ${isExpanded ? 'show' : ''}`}>
            </div>
        </div>
        </>
    );
}