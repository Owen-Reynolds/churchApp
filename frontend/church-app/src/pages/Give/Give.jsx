import './give.css';
import outdoorService from '../../assets/giveAssets/outdoorService.jpg';
import crossVid from '../../assets/giveAssets/crossVideo.mp4';
import crossVid2 from '../../assets/giveAssets/crossVideo2.mp4';
import crossVid3 from '../../assets/giveAssets/crossVideo3.mp4';
import crossVid4 from '../../assets/giveAssets/crossVideo4.mp4';
import crossVid5 from '../../assets/giveAssets/crossVideo5.mp4';

export default function Give() {
    return(
    <>
        
            <div className="give-header">
                <video className="heartvidGive" src={crossVid5} autoPlay loop muted />
                <h1>Support Our Mission</h1>
                <a href="https://www.paypal.com/donate/?hosted_button_id=Q4SNR47UHK2DE" target="_blank" rel="noopener noreferrer">
                    <button className="donate-button">Donate</button>
                </a>
            </div>

            <div className="give-container">
                <div className="give-left-box">
                    <h1>Donate</h1>
                    <p>Contribute financially to support our ongoing work. Donations can be made 
                    here on our website or by mailing a check to our office.</p>
                    <h1>Pray</h1>
                    <p>Please keep us, our ministry, and all our endeavors in your prayers, asking for guidance, strength, and blessings as 
                        we continue our mission.</p>
                </div>
                <div className="give-right-box">
                    <h1>Spread the word</h1>
                    <p>Share information about our ministry with your friends, family, and social networks, helping us spread our message 
                        of faith, hope, and love.</p>
                    <h1>Volunteer</h1>
                    <p>We would be truly grateful to have you offer your time, talents, and skills to support our programs, events, and ministries.</p>
                </div>
            </div>
        
    </>
    );
}