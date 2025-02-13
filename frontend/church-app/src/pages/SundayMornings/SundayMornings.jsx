import './SundayMornings.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import crossImage from '../../assets/vitalitylogoblue.png';
import biblepicture from '../../assets/sundayMorningAssets/biblepicture.jpg';
import learnPhoto from '../../assets/sundayMorningAssets/learnPhoto.jpg';
import coffeePhoto from '../../assets/sundayMorningAssets/coffeePhoto.jpg';
import clockPhoto from '../../assets/sundayMorningAssets/clockPhoto.jpg';
import video from '../../assets/vitalityChurchVideo.mp4';

export default function SundayMornings() {
    const [expandedCard, setExpandedCard] = useState(null);

    return (
        <>
            <div className="titleSection">
                <h1>
                    <div>Sunday Service</div>
                    <div>10:00am</div>
                </h1>
                <p>Learn more below</p>
                <i className="downArrow"></i>
            </div>
            <div className="welcomeSection">
                <div className="welcomeContent">
                    <motion.h2
                    initial={{opacity: 0, y: -200}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 2.0}}    
                    >We Want You To Feel</motion.h2>    
                    <div className="welcomeWords">
                        <motion.h2
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1.0}}>
                        Loved.
                        </motion.h2>
                        <motion.h2
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 2.0}}>
                        Heard.
                        </motion.h2>
                        <motion.h2
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 3.0}}
                        >Valued.
                        </motion.h2>
                        <motion.h2
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 4.0}}
                        >Accepted.
                        </motion.h2>
                        <motion.h2
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 5.0}}>
                        Welcomed.
                        </motion.h2>
                    </div>
                </div>
            </div>
            <div className="cardSection">
                <Card
                    image={biblepicture}
                    title="Should I Bring A Bible?"
                    description="Bring your Bible and if you don't have one let us know and we will provide one for you to keep. Don't worry, scriptures will be displayed on the screen but our goal is to have everyone in the Bible following along.  Please, don't feel inadequate if you don't know your way through Bible yet, truth is no one has! Everyone is learning!"
                    isExpanded={expandedCard === 1}
                    onClick={() => setExpandedCard(prev => (prev === 1 ? null : 1))}
                />
                <Card
                    image={learnPhoto}
                    title="What Will Be Taught?"
                    description="Together we will guide each other through God's life changing truths. Remember, our messages are Biblical.  Each week we take what the Bible says and learn how to apply it to our real life issues and questions and purpose.  God's Word grows us and feeds our souls, God gives you something through His Word on Sunday that you can start applying on Sunday."
                    isExpanded={expandedCard === 2}
                    onClick={() => setExpandedCard(prev => (prev === 2 ? null : 2))}
                />
                <Card
                    image={clockPhoto}
                    title="How Long Is Service?"
                    description="We meet every Sunday at 10:00 AM.  We are located at 1000 N. 16th St. in Grand Junction, CO.  We would love to have you join us!"
                    isExpanded={expandedCard === 3}
                    onClick={() => setExpandedCard(prev => (prev === 3 ? null : 3))}
                />
                <Card
                    image={coffeePhoto}
                    title="After Service?"
                    description="We provide great coffee and refreshments after each service in our fellowship hall for your enjoyment and relationship building we value our children and they have fun during this time just being kids. This a huge part of who we are as a church, and we would be blessed to connect join in the joy."
                    isExpanded={expandedCard === 4}
                    onClick={() => setExpandedCard(prev => (prev === 4 ? null : 4))}
                />
            </div>
            <div className="familySection">
                <div className="familyContent">
                    <h2>We Are More Then Just A Church...</h2>
                    <h3>We are a Family</h3>
                    <img src={crossImage} alt="" />
                </div>
                <div className="familyMedia">
                    <video width="320" height="540" autoPlay muted loop>
                        <source  src={video} type="video/mp4"/>
                        Your browser does not support the video.
                    </video>
                </div>
            </div>
        </>
    );
}

function Card({ image, title, description, isExpanded, onClick }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="card"
            onClick={onClick}
            >
            <img src={image} alt="Bible Photo" />
            <h2>{title}</h2>
            <div className="toggleBox">
                <p>{isExpanded ? "-" : "+"}</p>
            </div>
            <div className={`cardContent ${isExpanded ? 'show' : ''}`}>
                <p>{description}</p>
            </div>
        </motion.div>
    );
}