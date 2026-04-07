import './Connect.css';
import './MobileConnect.css';

import { useEffect } from 'react';
import logo from '../../assets/vitalitylogoblue.png';


export default function Connect() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://app.clearstream.io/js/external/form.html.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const jqScript = document.createElement('script');
            jqScript.textContent = 'var $csj = jQuery.noConflict(true);';
            document.body.appendChild(jqScript);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

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
                        className="cs_html_form connectCsForm"
                        action="https://opturl.com/h/nwyxe04V"
                        method="post"
                        id="cs_html_form_nwyxe04V"
                        target="_blank"
                    >
                        <div className="cs_html_form_result"></div>
                        <div className="cs_html_form_error"></div>
                        <div className="cs_html_form_row connectFormRow">
                            <input type="text" name="mobile_number" placeholder="Mobile Number *" data-country="US" />
                        </div>
                        <div className="cs_html_form_row connectFormRow">
                            <input type="text" name="first" placeholder="First Name" />
                        </div>
                        <div className="cs_html_form_row connectFormRow">
                            <input type="text" name="last" placeholder="Last Name" />
                        </div>
                        <div className="cs_html_form_row connectFormRow">
                            <input type="text" name="email" placeholder="Email Address *" />
                        </div>
                        <div className="cs_html_form_row connectFormRow">
                            <p>Choose which list(s) to subscribe to:</p>
                            <ul className="cs_html_form_lists">
                                <li>Loading...</li>
                            </ul>
                        </div>
                        <div className="cs_html_form_row connectFormRow">
                            <button type="submit">Subscribe</button>
                        </div>
                        <p className="cs_html_form_terms connectFormTerms">
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