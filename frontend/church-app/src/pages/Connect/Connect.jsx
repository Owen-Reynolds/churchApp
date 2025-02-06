import './Connect.css';

import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

import logo from '../../assets/vitalitylogoblue.png';

export default function Connect() {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState(""); 
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await axios.post("http://localhost:3000/api/users", {firstName: firstname, lastName: lastname, email: email});
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("Data submitted successfully");
        }catch(error){
            setMessage("Error submitting data");
        }
};

    return(
    <>
        <div className="connectContent">
            <div className="connectText">
                <div className="connectTitle">
                    <h1>Connect With <b>US.</b></h1>
                </div>  
                <div className="connectLogo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="connectForm">
                <form onSubmit={handleSubmit}>    
                    <label htmlFor="">Name</label>
                    <div className="nameBox">
                        <input type="text" placeholder="First" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder="Last" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <label htmlFor="">Email</label>
                    <div className="emailBox">
                        <input type="email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
                <p>{message}</p>
            </div>
        </div>
        

    </>
    );
}