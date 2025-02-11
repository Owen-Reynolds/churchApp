import React, { useState } from 'react';
import './Staff.css';
import heartrate from '../../assets/heartRateVid.mp4';
import pastorDave from '../../assets/pastorDave.jpg';
import bobAnderson from '../../assets/bobAnderson.jpg';
import dottieHarvey from '../../assets/dottieHarvey.jpg';

export default function AboutUs() {
    const [expandedCard, setExpandedCard] = useState(null);

    return (
        <>
            <div className="staffHeader">
                <video className="heartvid" src={heartrate} autoPlay loop muted />
                <h1>Meet the Team.</h1>
            </div>
            <div className="mainStaffContent">
                <div className="cards">
                    <Card
                        image={pastorDave}
                        title="David Kern"
                        description="Lead Pastor"
                        isExpanded={expandedCard === 1}
                        onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
                        
                    />
                    <Card
                        image={bobAnderson}
                        title="Bob Anderson"
                        description="Treasurer"
                        isExpanded={expandedCard === 2}
                        onClick={() => setExpandedCard(expandedCard === 2 ? null : 2)}
                        
                    />
                    <Card
                        image={dottieHarvey}
                        title="Dorothy Harvey"
                        description="Secretary"
                        isExpanded={expandedCard === 3}
                        onClick={() => setExpandedCard(expandedCard === 3 ? null : 3)}
                        
                    />
                    <Card
                        image={dottieHarvey}
                        title="Dorothy Harvey"
                        description="Secretary"
                        isExpanded={expandedCard === 3}
                        onClick={() => setExpandedCard(expandedCard === 3 ? null : 3)}
                       
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
            <div className="toggleBox">
                <p>{isExpanded ? "-" : "+"}</p>
            </div>
            <div className={`cardContent ${isExpanded ? 'show' : ''}`}>
                <p>{description}</p>
            </div>
        </div>
        </>
    );
}