import './Connect.css';

import { motion } from 'framer-motion';
import crossImage from '../../assets/vitalitylogoblue.png';

export default function Connect() {
    return(
    <>
        <div className="connectContent" style={{backgroundImage: `url(${crossImage})`}}>
            <div className="connectText">
                <div className="connectTitle">
                    <h1>Connect With <b>US.</b></h1>
                </div>
                <div className="connectSubtitle">
                    <p>Fill out the form to get in touch with us. 
                    Responses are usually handled within 48 hours. </p>
                </div>
            </div>
            <div className="connectForm">
                <form action="">    
                    <label htmlFor="">Name</label>
                    <div className="nameBox">
                        <input type="text" placeholder="First" />
                        <input type="text" placeholder="Last" />
                    </div>
                    <label htmlFor="">Email</label>
                    <div className="emailBox">
                        <input type="email" placeholder="example@email.com" />
                    </div>
                    <label htmlFor="">Message</label>
                    <div className="messageBox">
                        <textarea name="" id="" cols={5}></textarea>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" />
                        <label htmlFor="">I would like to enroll in the Vitality Church Email List.</label>
                    </div>
                    <motion.button
                    whileHover={{ scale: 1.05}}
                    whileInView={{ scale: 0.9}}
                    type="submit">Send</motion.button>
                </form>
            </div>
        </div>
        

    </>
    );
}