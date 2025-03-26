import "./aboutus.css"
import waterfall from '../../assets/aboutAssets/waterfall.mp4';
import headerVid from '../../assets/aboutAssets/headerVid.mp4';
import outdoor from '../../assets/aboutAssets/aboutOutdoor.jpg';
export default function AboutUs() {
    return(
    <>
    <div className="aboutHeader">
        <h1>About Vitality</h1>
        <video className="aboutHeaderVid" src={waterfall} autoPlay loop muted />
    </div>
            <div className="missionStatement">
                <div className="missionLeft">
                    <h1>Our Mission</h1>
                    <h2>Love God/Love People</h2>
                </div>
                <div className="missionRight">
                    <img className="outdoor" src={outdoor} alt="outdoor" />
                </div>
            </div>
            <div className = "ourMission" >
                <div className="ourMissionLeft">
                    <div className="ourMissionTopR">
                        <h2>Believe Love</h2>
                        <p>  Growing in knowledge of the Lord Jesus Christ by reading and understanding that His truth equips and empowers believers in their 
                        faith through believing that God loves them and they come to love God.</p>
                    </div>
                    <div className="ourMissionTopL">
                        <img className="outdoor" src={outdoor} alt="outdoor" />
                    </div>
                </div>
                <div className="ourMissionRight">
                    <div className="ourMissionBottomL">
                        <h2>Live Love</h2>
                        <p>Knowing and living in a loving relationship with the Lord Jesus Christ fuels a heart to worship and serve Him by serving each other. Love provides us with an ability to be a light and a testimony, living in the essence of our 
                        Lord with fellow believers in the Church (Assembly of Believers in Jesus)  </p>
                        </div>
                        <div className="ourMissionBottomR">
                        <h2>Share Love</h2>
                        <p>The joy of our salvation and the love of God through Jesus Christ is shared in the community, nation and world. 
                        Jesus commands us to "Go into the world and preach the gospel (Good News) to all creation." (Mark 16:15)</p>
                    </div>
                </div>
            </div>
            <div className="ourStory">
                <div className="ourStoryLeft">
                    <p>Not all of us have grown up with a true understanding of God. At a certain point in our lives, questions about God start to surface. Each day, the question about God gets louder within us, 
                    and we want to discover the truth about why we are here. It is this truth that will set us free (John 8:32).<br></br><br></br>
                    Vitality Church is a community of people coming together to know and serve God. We are dedicated to sharing the vital
                    truth of God's love, as it is expressed in John 3:16. God loves you so deeply that He gave you Jesus Christ, not to condemn you, but to give you eternal life!<br></br><br></br>
                    Vitality Church is a place for people to come together to serve a real God. It is a community of repentant believers 
                    where you can gather and be given the space to grow into a greater purpose through the fundamental commands of Jesus to Love God and Love People.
                    </p>
                </div>
                <div className="ourStoryRight">
                    <h1>Our Story</h1>
                    <img className="outdoor" src={outdoor} alt="outdoor" />
                    <p>Vitality Church is a journey to find answers to the questions you have. If you are ready to answer that still, small voice within you, Jesus has provided a way through Vitality Church. We hope to see you soon!</p>
                </div>
            </div>
            <div className="statementOfFaith">
                <h1>Statement of Faith</h1>
                <h2>Holy Bible</h2>
                <p>The Holy Bible, and only the Bible, is the authoritative Word of God. It alone is the final authority in determining all doctrinal truths. In its original writing, it is inspired, infallible and inerrant
                (2Timothy 3:16; 2 Peter 1:20-21; Proverbs 30:5; Romans 16:25-26).</p>
                <h2>Trinity</h2>
                <p>There is one God, eternally existent in three persons: Father, Son and Holy Spirit. These three are co-equal and co-eternal 
                (I John 5:7; Genesis 1:26; Matthew 3:16-17, 28:19; Luke 1:35;  Isaiah 9:6; Hebrews 3:7-11). </p>
                <h2>Jesus Christ</h2>
                <p>Jesus Christ is God the Son, the second person of the Trinity. On earth, Jesus was 100% God and 100% man. He is the only man ever to have lived a sinless life. He was born of a virgin, 
                lived a sinless life, performed miracles, died on the cross for mankind and thus, atoned for our sins through the shedding of His blood. He rose from the dead on the third day according to the Scriptures, ascended to the right hand of the Father, 
                and will return again in power and glory (John 1:1,14, 20:28; 1Timothy 3:16; Isaiah 9:6; Philippians 2:5-6; 1Timothy 2:5).</p>
                <h2>Virgin Birth</h2>
                <p>Jesus Christ was conceived by God the Father, through the Holy Spirit (the third person of the Trinity) in the virgin Mary's womb; therefore, He is the Son of God 
                (Matthew 1:18, 25; Luke 1:35; Isaiah 7:14; Matthew 1:18, 23-25; Luke 1:27-35).</p>
                <h2>Redemption</h2>
                <p>Humanity was created good and upright, but by voluntary transgression we fell; our only hope of redemption is in Jesus Christ, the Son of God 
                (Gen.1:26-31, 3:1-7; Romans 5:12-21).</p>
                <h2>Regeneration</h2>
                <p>For anyone to know God, regeneration by the Holy Spirit is absolutely essential (John 6:44, 65).</p>
                <h2>Salvation</h2>
                <p>We are saved by grace through faith in Jesus Christ; His death, burial, and resurrection. Salvation is a gift from God, not a result of our good works or of any human efforts (Ephesians 2:8-9; Galatians 2:16, 3:8; Titus 3:5; Romans 10:9-10; 
                Acts 16:31; Hebrews 9:22).</p>
                <h2>Repentance</h2>
                <p>Repentance is the commitment to turn away from sin in every area of our lives and to follow Christ, which allows us to receive His redemption and to be regenerated by the Holy Spirit. Thus, through repentance we receive forgiveness of sins and appropriate salvation
                (Acts 2:21, 3:19; 1 John 1:9).</p>
                <h2>Sanctification</h2>
                <p>Sanctification is the ongoing process of yielding to God's Word and His Spirit  in order to complete the development of Christ's character in us. It is through the present ministry of the Holy Spirit and the Word of God that the Christian is enabled to live a godly life (1Thessalonians 4:3, 5:23; 2 Corinthians 3:18, 6:14-18, 2 Thessalonians 2:1-3, Romans 8:29, 12:1-2, 
                Hebrews 2:11).</p>
                <h2>Jesus' Blood</h2>
                <p>The Blood that Jesus Christ shed on the Cross of Calvary was sinless and is 100% sufficient to cleanse mankind of all sin. Jesus allowed Himself to be punished for both our sinfulness and our sins, enabling all those who believe to be free from the penalty of sin, which is death 
                (1 John 1:7; Revelation 1:5, 5:9; Colossians 1:20; Romans 3:10-12, 23, 5:9; John 1:29).</p>
                <h2>Jesus Christ Indwells All Believers</h2>
                <p>Christians are people who have invited the Lord Jesus Christ to come and live inside them by His Holy Spirit. They relinquish the authority of their lives over to him thus making Jesus the Lord of their life as well as Savior. 
                They put their trust in what Jesus accomplished for them when He died, was buried, and rose again from the dead (John 1:12; John 14:17, 23; John 15:4; Romans 8:11; Revelations 3:20).</p>
                <h2>Baptism in the Holy Spirit</h2>
                <p>Given at Pentecost, it is the promise of the Father, sent by Jesus after His Ascension, to empower the church to preach the Gospel throughout the whole earth (Joel 2:28-29; Matthew 3:11; Mark 16:17; Acts 1:5, 2:1-4, 17, 38-39, 8:14-17, 10:38, 44-47,
                11:15-17, 19:1-6).</p>
                <h2>The Gifts of the Holy Spirit</h2>
                <p>The Holy Spirit is manifested through a variety of spiritual  gifts to build and sanctify the church, demonstrate the validity of the resurrection, and confirm the power of the Gospel. The Bible lists of these gifts are not necessarily exhaustive, and the gifts may occur in various combinations. All believers are commanded to earnestly desire the manifestation of the gifts  in their lives. 
                These gifts always operate in harmony with the Scriptures and should never be used in violation of Biblical parameters (Hebrews 2:4; Romans 1:11, 12 :4-8; Ephesians 4:16; 2 Timothy 1:5-16, 4:14; 1 Corinthians 12:1-31, 14:1-40; 1 Peter 4:10).</p>
                <h2>The Church</h2>
                <p>The church is the Body of Christ, the habitation of God through the Spirit, with divine appointments for the fulfillment of Jesus' great commission. Every person who is born of the Spirit is an integral part of the church as a member of the body of believers. There is a spiritual unity of all believers in our Lord Jesus Christ 
                (Ephesians 1:22, 2:19-22; Hebrews 12:23; John 17:11, 20-23).</p>
                <h2>Water Baptism</h2>
                <p>Following faith in the Lord Jesus Christ, the new convert is commanded by the Word of God to be baptized in water in the Name of the Father and of the Son and of the Holy Spirit (Matthew 28:19; Acts 2:38). </p>
                <h2>The Lord's Supper</h2>
                <p>A unique time of communion in the presence of God when the elements of bread and grape juice (the Body and Blood of the Lord Jesus Christ) are taken in remembrance of Jesus' sacrifice on the Cross (Matthew 26:26-29; Mark 16:16; Acts 8:12, 36-38; 10:47-48; 
                1Corinthians 10:16, 11:23-25).</p>
                <h2>Healing of the Sick</h2>
                <p>Healing of the sick is illustrated in the life and ministry of Jesus, and included in the commission of Jesus to His disciples. It is given as a sign which is to follow believers. It is also a part of Jesus' work on the Cross and one of the gifts of the Spirit (Psalm 103:2-3; Isaiah 53:5; Matthew 8:16-17; Mark 16:17-18; Acts 8:6-7; James 5:14-16; 1 Corinthians 12:9, 
                28; Romans 11:29).</p>
                <h2>God's Will for Provision</h2>
                <p>It is the Father's will for believers to become whole, healthy and successful in all areas of life. But because of the fall, many may not receive the full benefits of God's will while on Earth. That fact, though, should never prevent all believers from seeking the full  benefits of Christ's provision in order 
                to better serve others.
                <ul>
                    <li>Spiritual (John 3:3-11; 2 Corinthians 5:17-21; Romans 10:9-10).</li>
                    <li>Mental and Emotional (2 Timothy 1:7, 2:11; Philippians 4:7-8; Romans 12:2; Isaiah 26:3).</li>
                    <li>Physical (Isaiah 53:4-5; Matthew 8:17; 1 Peter 2:24).</li>
                    <li>Financial (Joshua 1:8; Malachi 3:10-11; Luke 6:38; 2 Corinthians 9:6-10; Deuteronomy  28:1-14; Psalm 34:10, 84:11; Philippians 4:19).</li>
                </ul>
                </p>
                <h2>Ressurection</h2>
                <p>Jesus Christ was physically resurrected from the dead in a glorified body three days after His death on the cross. In addition, both the saved and the lost will be resurrected; they that are saved to the resurrection of life and they that are lost to the resurrection of eternal damnation (Luke 24:16, 36, 39; John 2:19-21, 20:26-28, 21:4; Acts 24:15; 
                1 Corinthians 15:42, 44; Philippians 1:21-23, 3:21).</p>
                <h2>Heaven</h2>
                <p>Heaven is the eternal dwelling place for all believers in the Gospel of Jesus Christ (Matthew 5:3, 12, 20, 6:20, 19:21, 25:34; John 17:24; 2 Corinthians 5:1; Hebrews 11:16; 1 Peter 1:4).</p>
                <h2>Hell</h2>
                <p>After living one life on earth, the unbelievers will be judged by God and sent to Hell where they will be eternally tormented with the Devil and the Fallen Angels (Matthew 25:41; Mark 9:43-48; Hebrews 9:27; Revelation 14:9-11, 20:12-15, 21:8).</p>
                <h2>Second Coming</h2>
                <p>Jesus Christ will physically and visibly return to earth for the second time to establish His Kingdom. This will occur at a date undisclosed by the Scriptures 
                (Matthew 24:30,  26:63-64; Acts 1:9-11; 1 Thessalonians 4:15-17; 2 Thessalonians 1:7-8; Revelation 1:7).</p>
            </div>
           
    </>
    );
}