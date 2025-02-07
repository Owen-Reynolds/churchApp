import './Connect.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

import logo from '../../assets/vitalitylogoblue.png';


export default function Connect() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState(""); 
    const [textarea, setTextArea] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstname || !lastname || !email) {
            setMessage("All fields are required");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/api/users", {
                firstName: firstname,
                lastName: lastname,
                email: email,
                textarea: textarea
            });
            setFirstName("");
            setLastName("");
            setEmail("");
            setTextArea("");
            setMessage("Data submitted successfully");
        } catch (error) {
            setMessage("Error submitting data");
        }
    };

    return (
        <>
            <div className="connectContent">
                <div className="connectText">
                    <div className="connectTitle">
                        <h1>Connect With <b>US.</b></h1>
                    </div>
                    <div className="connectSubtitle">
                        <p>Fill out the form to get in touch with us. Responses are usually handled within 48 hours.</p>
                    </div>
                    <div className="connectLogo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="connectForm">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstname">Name</label>
                        <div className="nameBox">
                            <input
                                type="text"
                                id="firstname"
                                placeholder="First Name"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                type="text"
                                id="lastname"
                                placeholder="Last Name"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <label htmlFor="email">Email</label>
                        <div className="emailBox">
                            <input
                                type="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <label htmlFor="textarea">Message</label>
                        <div className="messageBox">
                            <textarea
                                id="textarea"
                                value={textarea}
                                onChange={(e) => setTextArea(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="checkBox">
                            <input type="checkbox" />
                            <label htmlFor="">I would like to enroll in the Vitality Church Email List.</label>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                        >
                            Send
                        </motion.button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </>
    );
}