import './Youth.css';
import cc from '../../assets/youthAssets/ccadets.jpeg';
import image1 from '../../assets/youthAssets/image1.jpeg';
import image2 from '../../assets/youthAssets/image2.jpeg';
import image3 from '../../assets/youthAssets/image3.jpeg';
import image4 from '../../assets/youthAssets/image4.jpeg';
import image5 from '../../assets/youthAssets/image5.jpeg';
import image6 from '../../assets/youthAssets/image6.jpeg';
import image7 from '../../assets/youthAssets/image7.jpeg';
import image8 from '../../assets/youthAssets/image8.jpeg';
import image9 from '../../assets/youthAssets/image9.jpeg';
import image10 from '../../assets/youthAssets/image10.jpeg';
import image11 from '../../assets/youthAssets/image11.jpeg';
import image12 from '../../assets/youthAssets/image12.jpeg';
import image13 from '../../assets/youthAssets/image13.jpeg';
import image14 from '../../assets/youthAssets/image14.jpeg';
import vitalogo from '../../assets/staffAssets/vitalitylogowhite.png';
import youthAppForm from '../../assets/youthAssets/YouthAppForm.pdf';
import releaseLiabilityForm from '../../assets/youthAssets/ReleaseLiabilityForm.pdf';
import adultVolunteerApp from '../../assets/youthAssets/AdultVolunteerForm.pdf';
import cc2 from '../../assets/youthAssets/ccadets2.png';
import fishingIMG from '../../assets/youthAssets/fishingIMG.jpg';


export default function Youth() {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];

    return (
        <>
        
            
        
            <div className="trailLifePage">
                
            <h1 className="trailLifeMainText">Christian Cadets</h1>
                <div className="trailLifeContainer">
                    <div className="Top-section">
                        <div className="info">
                            <p>
                                Christian Cadets are for both males and female youth. Christian Cadets are not identified with a
                                particular church but are operated under the auspices and oversight of Vitality Church INC. There is an
                                ecumenical leadership board for the overseeing and planning for Christian Cadets. This Board is subject to
                                the intervention and/or guidance of the Board of Vitality Church INC. The intention of Christian Cadets is
                                to streamline and simplify the youth's growth and leadership development that is both enjoyable and
                                effective.
                            </p>
                        </div>

                        <div className="logo">
                            <img src={cc2} alt="Christian Cadets Logo" />
                        </div>
                    </div>

                </div>
    <div className="pdf-container">
    <div className="pdfs">
        <div className="pdf-item">
            <h2>Youth Application Form</h2>
            <iframe id="myPDF" src={youthAppForm} frameBorder="0"></iframe>
            
             <a href={youthAppForm}download="Youth_Application_Form.pdf">
                <button className="newButtons">Download/Print</button>
             </a>

        </div>

        <div className="pdf-item">
            <h2>Release of Liability Form</h2>
            <iframe id="myPDF" src={releaseLiabilityForm} frameBorder="0"></iframe>
            <a href={releaseLiabilityForm}download="ReleaseLiabilityForm.pdf">
                <button className="newButtons">Download/Print</button>
             </a>

        </div>
        <div className="pdf-item">
            <h2>Adult Volunteer Application</h2>
            <iframe id="myPDF" src={adultVolunteerApp} frameBorder="0"></iframe>
            <a href={adultVolunteerApp}download="AdultVolunteerForm.pdf">
                <button className="newButtons">Download/Print</button>
             </a>
        </div>
    </div>
</div>
                <div className="slider">
                    <div className="slide-track">
                        {images.map((img, index) => (
                            <div className="Slide" key={index}>
                                <img src={img} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}