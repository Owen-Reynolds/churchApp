import React, { useState } from 'react';
import './Staff.css';
import heartrate from '../../assets/staffAssets/heartRateVid.mp4';
import pastorDave from '../../assets/staffAssets/pastorDave.jpg';
import bobAnderson from '../../assets/staffAssets/bobAnderson.jpg';
import dorothyHarvey from '../../assets/staffAssets/dorothyHarvey.jpg';
import timMcNamee from '../../assets/staffAssets/timMcNamee.jpg';
import rondaKern from '../../assets/staffAssets/rondaKern.jpg';
import scottMiller from '../../assets/staffAssets/scottMiller.jpg';

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
                        title="Pastor"
                        description="David Kern"
                        isExpanded={expandedCard === 1}
                        onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
                        
                    />
                    <Card
                        image={pastorDave}
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
                        image={dorothyHarvey}
                        title="Director of Missions"
                        description="Cindy Keeney"
                        isExpanded={expandedCard === 3}
                        onClick={() => setExpandedCard(expandedCard === 4 ? null : 4)}
                       
                    />
                    <Card
                        image={dorothyHarvey}
                        title="Office Administartor"
                        description="Dorothy Harvey"
                        isExpanded={expandedCard === 3}
                        onClick={() => setExpandedCard(expandedCard === 4 ? null : 4)}
                       
                    />
                    <Card
                        image={rondaKern}
                        title="Youth Director"
                        description="Ronda Kern"
                        isExpanded={expandedCard === 3}
                        onClick={() => setExpandedCard(expandedCard === 4 ? null : 4)}
                       
                    />
                    <Card
                        image={timMcNamee}
                        title="Outreach Director"
                        description="Tim McNamee"
                        isExpanded={expandedCard === 3}
                        onClick={() => setExpandedCard(expandedCard === 4 ? null : 4)}
                       
                    />
                    <Card
                        image={scottMiller}
                        title="Discipleship Director"
                        description="Scott Miller"
                        isExpanded={expandedCard === 3}
                        onClick={() => setExpandedCard(expandedCard === 4 ? null : 4)}
                       
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