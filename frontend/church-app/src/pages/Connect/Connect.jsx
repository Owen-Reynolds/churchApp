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
                        <p>Fill out the form to connect with us and receive our text alerts.</p>
                    </div>
                    <div className="connectLogo">
                        <img src={logo} alt="" decoding="async" />
                    </div>
                </div>
                <div className="connectForm">
                    <h3>Connect with Vitality</h3>
                    <p className="connectFormSubtitle">Fill out the form to receive our text alerts</p>
                    <form
                        className="connectCsForm"
                        action="https://opturl.com/h/nwyxe04V"
                        method="post"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="connectFormRow">
                            <input type="text" name="mobile_number" placeholder="Mobile Number *" />
                        </div>
                        <div className="connectFormRow">
                            <input type="text" name="first" placeholder="First Name" />
                        </div>
                        <div className="connectFormRow">
                            <input type="text" name="last" placeholder="Last Name" />
                        </div>
                        <div className="connectFormRow">
                            <input type="text" name="email" placeholder="Email Address *" />
                        </div>
                        <div className="connectFormRow">
                            <button type="submit">Subscribe</button>
                        </div>
                        <p className="connectFormTerms">
                            Message &amp; data rates may apply. Message frequency varies.{' '}
                            <a href="https://clst.io/terms" target="_blank" rel="noreferrer">Terms of Service</a>{' '}
                            and{' '}
                            <a href="https://clst.io/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>. To opt-out,
                            text STOP at any time.{' '}
                            <a href="https://clearstream.io" target="_blank" rel="noreferrer">Church texting software by Clearstream.</a>
                        </p>
                    </form>
                </div>
            </div>
        </>

    );
}