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


export default function Youth() {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];

    return (
        <>
            <section className="trailLifePage">
                <h1 className="trailLifeMainText">Christian Cadets</h1>

                <div className="trailLifeContainer">
                    <section className="Top-section">
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
                            <img src={cc} alt="Christian Cadets Logo" />
                        </div>
                    </section>

                    <div className="Middle-section">
                        <h2>Objectives</h2>
                        <p><b>King:</b> Knowing Jesus more intimately and following Him with endurance.</p>
                        <p><b>Bible:</b> Memorizing Scripture</p>
                        <p><b>Pray:</b> Becoming praying men and women</p>
                        <p><b>Faith:</b> Learning to place Trust and Confidence in Jesus</p>
                        <p><b>Community and Nation:</b> Serving as Lights to the community, loving the USA, and equipping future leaders.</p>
                        <p><b>Integrity:</b> Learning that integrity is the essence of living out our Faith.</p>
                        <p><b>Humility:</b> Not placing self over the cause.</p>
                        <p><b>Lead:</b> Training youth to take a prominent role in Christian Leadership development that will impact the
                            church and communities into the future.</p>
                        <p><b>Outdoors/Life Skills:</b> Advancement will be evaluated through the identification of ranks with
                            achievement ranks (8 age-appropriate stars and age to advance leadership roles).</p>
                        <p><b>Shirts:</b> Ranks will be placed on the Left sleeve and the American flag will be placed on the right sleeve.</p>
                        <p><b>Emblem:</b> Will be over the left chest.</p>
                        <p><b>Hats:</b> Ball caps emblem face, rank back.</p>
                    </div>

                </div>

                <section className="buttonSection">
                    <div className="buttonContainer">
                        <h2>Forms</h2>
                        <div className="newButtons">
                            <button>
                                Adult Volunteer Application
                            </button>
                            <button>
                                Youth Application Form
                            </button>
                            <button>
                                Release of Liability Form
                            </button>
                        </div>
                    </div>
                </section>

                <div className="slider">
                    <div className="slide-track">
                        {images.map((img, index) => (
                            <div className="Slide" key={index}>
                                <img src={img} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}