import './SundayMornings.css';
import './MobileSundayMornings.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import topVideo from '../../assets/sundayMorningAssets/topVideo.mp4';
import crossImage from '../../assets/vitalitylogoblue.png';
import biblepicture from '../../assets/sundayMorningAssets/biblepicture.jpg';
import learnPhoto from '../../assets/sundayMorningAssets/learnPhoto.jpg';
import coffeePhoto from '../../assets/sundayMorningAssets/coffeePhoto.jpg';
import clockPhoto from '../../assets/sundayMorningAssets/clockPhoto.jpg';
import timePhoto from '../../assets/sundayMorningAssets/timePhoto.jpeg';
import bible1 from '../../assets/sundayMorningAssets/bible1.jpg';
import bible2 from '../../assets/sundayMorningAssets/bible2.jpg';
import teaching from '../../assets/sundayMorningAssets/teaching.jpg';
import coffee1 from '../../assets/sundayMorningAssets/coffee1.jpg';
import davePreaching from '../../assets/sundayMorningAssets/pastorDavePreaching.jpg';
export default function SundayMornings() {
    const [expandedCard, setExpandedCard] = useState(null);

    return (
        <>
            <div className="titleSection">
                <video 
                            className="vidGive" 
                            src={topVideo} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            disablePictureInPicture 
                            controlsList="nodownload nofullscreen noplaybackrate"
                        ></video>
                <h1>
                    <div>Sunday Service</div>
                </h1>
            </div>
            <div className="timeSection">
                <div className="timeContent">
                    <div className="timeLeft">
                        <h2>Sundays at 10:00am</h2>
                        <p>
                            During your Sunday visit, expect a warm family atmosphere where you're more than just a number. Our youth learn alongside their parents and can enjoy uplifting music and teaching from the same sermon passages. Individuals and families will leave feeling invigorated and refreshed in the Lord Jesus.
                        </p>
                        <p>Learn More</p>
                        <i className="arrow"></i>
                    </div>
                    <div className="timeRight">
                        <img src={timePhoto} alt="" />
                    </div>
                </div>
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
                    image={bible1}
                    title="Should I Bring A Bible?"
                    description="Having your Bible in hand allows you to follow along, making the experience more personal and immersive. If you don’t have a Bible of your own, don’t worry at all! We have one available for you, ensuring that everyone can partake in the enriching journey of faith together."
                    isExpanded={expandedCard === 1}
                    onClick={() => setExpandedCard(prev => (prev === 1 ? null : 1))}
                />
                <Card
                    image={davePreaching}
                    title="What Will Be Taught?"
                    description="Jesus declares that He is the Way, the Truth, and the Life (John 14:6). You will gain knowledge about God, find answers to your questions, and be motivated to live a fulfilling life in Christ Jesus."
                    isExpanded={expandedCard === 2}
                    onClick={() => setExpandedCard(prev => (prev === 2 ? null : 2))}
                />
                <Card
                    image={coffee1}
                    title="After Service?"
                    description="At the conclusion of worship, we gather in community to enjoy a light Sunday morning meal, and continuation of community. This time of community is a great time to connect and engage with each other and meet new people. Be sure to visit our welcome table to get more information."
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
            </div>
        </>
    );
}

function Card({ image, title, description, isExpanded, onClick }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="sundayCard"
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