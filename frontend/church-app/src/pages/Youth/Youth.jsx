import './Youth.css';
import fishImage from '../../assets/youthAssets/fishingkid.jpeg';
import girlFishImage from '../../assets/youthAssets/Ahgwork.jpg'
export default function Youth() {
    return(

    <>



<body>
    <div class="slider">
        
            
             <div class="slide-track">

                 {/* 1-9 Slides */}

                <div class="Slide">
                    <img src={fishImage} alt="" />
                </div>

                <div class="Slide">
                    <img src={girlFishImage} alt="" />
                </div>

                <div class="Slide">
                    <img src={fishImage} alt="" />
                </div>

                <div class="Slide">
                    <img src={girlFishImage} alt="" />
                </div>

                 <div class="Slide">
                    <img src={fishImage} alt="" />
                 </div>
            
                <div class="Slide">
                    <img src={girlFishImage} alt="" />
                </div>
            </div>
        
    </div>
           
    </body>

  


    <section>
        <div className='trailLifePage'>
            <h1 className='trailLifeMainText'>Trail Life <br />& <br />AHG </h1>
            <p className='trailLifeSubtext'>Therefore, if anyone is in Christ, the New Creation has come: <br /></p>
                <div className='trailLifeContainer'>
                    <h2> Trail Life USA</h2>
                    <div className="infoContainer">
                        <img src={fishImage} alt="" />
                        <div classname="infoPara">
                            <p>Is a Christian Outdoor Adventure, Character, and Leadership Program for boys and young men. Operating from Troops that are chartered through churches in 48 states, the K-12 program centers on outdoor experiences that build a young man’s skills and allow him to grow on a personal level and as a role model and leader for his peers.  Living the Trail Life is a journey established on timeless values derived from the Bible.</p>
                            <p className= "infoSecPara"> The earth is the Lord's and all that is in it, the world, and those who live in it Psalm 24:1 </p>
                        </div>
                    </div>
  
                    <h2> American Heritage Girls</h2>
                    <div  className='infoAhg'>
                         <img src={girlFishImage}alt="" />
                         <p > Building women of integrity through service to God, family, community and country,” American Heritage Girls is the premier national character development organization for young women that embraces Christian values and encourages family involvement.  All biological girls of any color, creed, race, national origin and socioeconomic status who agree to live according to the standards of the AHG Oath and the AHG Creed are invited to be members of American Heritage Girls. </p>

                    </div>
                    
                </div>
        </div>
    </section>
    </>
    )
}