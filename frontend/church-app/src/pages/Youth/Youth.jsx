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



export default function Youth() {
    return(

    <>


<body>

    <section>
        <div className='trailLifePage'>
            <h1 className='trailLifeMainText'> Christian Cadets </h1>
            <p className='trailLifeSubtext'>Therefore, if anyone is in Christ, the New Creation has come: <br /> With faith God, I pledge to uphold the values of honesty, integrity, compassion. I will strive to follow Christ's teachings, have a positive impact on my family, community, and nation, serve others selflessly, and lead by example in all that I do. Amen</p>
                <div className='trailLifeContainer'>
                    <h2> </h2>
                  

                    <section class="Top-section">
                        <div class="info">Troop Advancement
                            Christian Cadets are for both males and female youth. Christian Cadets are not identified with a
                            particular church but are operated under the auspices and oversight of Vitality Church INC. There is an
                            ecumenical leadership board for the overseeing and planning for Christian Cadets. This Board subject to
                            the intervention and/or guidance to the Board of Vitality Church INC. The intention of Christian Cadets is
                            to streamline and simplify the youth's growth and leadership development that is both enjoyable and
                            effective. <br /> 

                            <br />
                            Objectives

                            King: Knowing Jesus more intimately and following Him with endurance. <br />

                            Bible: Memorizing Scripture <br />

                            Pray: Becoming praying men and women <br />

                            Faith: Learning to place Trust and Confidence in Jesus
                            Community and Nation: Serving as Lights to the community, loving the USA and equipping future leaders. <br />
                            
                            Integrity: Learning that integrity is the essence of living out our Faith. <br />

                            Humility: Not placing self over the cause. <br />

                            Lead: Training youth to take a prominent role in Christian Leadership development that will impact the
                            church and communities into the future. <br />

                            Outdoors/Life Skills and learning: Advancement will be evaluated through the identification of ranks with
                            achievement ranks (8 age-appropriate stars and age to advance leadership roles) <br />

                            Shirts- Ranks will be placed on the Left sleeve and the American flag will be placed on the right sleeve. <br />

                            Emblem will be over the left chest. <br />

                            Hats- Ball caps emblem face, rank back. <br />
                        </div>
                        
                        <div class="logo"><img src={cc} alt="" /></div>
                        

                    </section>

                    <nav class="buttons">
                        <button> Adult Volunteer Application for Chrsitan Cadets</button>
                        <button>Christian Cadet Youth Application Form</button>
                        <button> Christian Cadet Release of Liability Form</button>
                    </nav>

                    
                    
                </div>
        </div>
    </section>

    <div class="slider">
        
            
             <div class="slide-track">

                 {/* 1-14 Slides */}

                <div class="Slide">
                    <img src={image1} alt="" />
                </div>

                <div class="Slide">
                    <img src={image2} alt="" />
                </div>

                <div class="Slide">
                    <img src={image3} alt="" />
                </div>

                <div class="Slide">
                    <img src={image4} alt="" />
                </div>

                <div class="Slide">
                    <img src={image5} alt="" />
                </div>

                <div class="Slide">
                    <img src={image7} alt="" />
                </div>

                <div class="Slide">
                    <img src={image8} alt="" />
                </div>

                <div class="Slide">
                    <img src={image9} alt="" />
                </div>

                <div class="Slide">
                    <img src={image10} alt="" />
                </div>

                <div class="Slide">
                    <img src={image11} alt="" />
                </div>

                <div class="Slide">
                    <img src={image12} alt="" />
                </div>

                <div class="Slide">
                    <img src={image13} alt="" />
                </div>

                <div class="Slide">
                    <img src={image14} alt="" />
                </div>



            </div>
        
    </div>
           
    </body>

  


   
    </>
    )
}