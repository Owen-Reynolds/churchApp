import './SundayMornings.css';
import React,  {useState} from 'react';
import {motion} from 'framer-motion';


import biblepicture from '../../assets/sundayMorningAssets/biblepicture.jpg';
import learnPhoto from '../../assets/sundayMorningAssets/learnPhoto.jpg';
import coffeePhoto from '../../assets/sundayMorningAssets/coffeePhoto.jpg';
import clockPhoto from '../../assets/sundayMorningAssets/clockPhoto.jpg';

export default function SundayMornings() {
    return(
    <>
        <div className="titleSection">
            <img src="" alt="" />
            <div className="titleSectionContent">
                <h1>Your welcome here.</h1>
                <p>At Vitality church...</p>
            </div>
        </div>
        <div className="cardSection">
            <Card image={biblepicture} title="Should I Bring A Bible?" description="Bring your Bible and if you don't have one let us know and we will provide one for you to keep. Don't worry, scriptures will be displayed on the screen but our goal is to have everyone in the Bible following along.  Please, don't feel inadequate if you don't know your way through Bible yet, truth is no one has! Everyone is learning!" />
            <Card image={learnPhoto} title="What Will Be Taught?" description="Together we will guide each other through God's life changing truths. Remember, our messages are Biblical.  Each week we take what the Bible says and learn how to apply it to our real life issues and questions and purpose.  God's Word grows us and feeds our souls, God gives you something through His Word on Sunday that you can start applying on Sunday. "/>
            <Card image={clockPhoto} title="How Long Is Service?" description="We meet every Sunday at 10:00 AM.  We are located at 1000 N. 16th St. in Grand Junction, CO.  We would love to have you join us!"/>
            <Card image={coffeePhoto} title="After Service?" description="We provide great coffee and refreshments after each service in our fellowship hall for your enjoyment and relationship building we value our children and they have fun during this time just being kids. This a huge part of who we are as a church, and we would be blessed to connect join in the joy."/>
        </div>
    </>
    );
}

function Card(props) {
    const [toggle, setToggle] = useState(false);

    return (
        <motion.div
        whileHover={{ scale: 1.05 }}

        className="card" onClick={() => setToggle(!toggle)}>
            <img src={props.image} alt="Bible Photo" />
            <h2>{props.title}</h2>
            <div className="toggleBox">
                <p>{toggle ? "-" : "+"}</p>
            </div>
            <div className={`cardContent ${toggle ? 'show' : ''}`}>
                <p>{props.description}</p>
            </div>
        </motion.div>
    );
}