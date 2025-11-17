import './Connect.css';
import './MobileConnect.css';

import logo from '../../assets/vitalitylogoblue.png';


export default function Connect() {
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
                    <iframe width="400" height="315" src="https://opturl.com/i/nwyxe04V?hide_title=0" frameborder="0"></iframe>
                </div>
            </div>
        </>

    );
}