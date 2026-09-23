import React from 'react';
import { motion } from 'framer-motion';
import './KingdomAbilities.css';
import './MobileKingdomAbilities.css';

import crossImage from '../../assets/vitalitylogoblue.png';
import kaLogo from '../../assets/kingdomAssets/kalogo.jpg';
import rondaKern from '../../assets/staffAssets/rondaKern.webp';

// Badge Icon Component for Special Responders
function BadgeIcon() {
    return (
        <svg 
            viewBox="0 0 24 24" 
            width="1.15em" 
            height="1.15em" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ display: 'inline-block', verticalAlign: '-0.125em' }}
        >
            {/* Outer Badge Shield */}
            <path d="M12 2L4 5V11C4 16.5 7.5 21.2 12 22C16.5 21.2 20 16.5 20 11V5L12 2Z" />
            {/* Inner Star Symbol */}
            <polygon 
                points="12,7 13.5,10.2 17,10.5 14.3,12.8 15.1,16.2 12,14.4 8.9,16.2 9.7,12.8 7,10.5 10.5,10.2" 
                fill="currentColor"
                stroke="none"
            />
        </svg>
    );
}

export default function KingdomAbilities() {
    const futureActivities = [
        {
            icon: 'badge',
            title: 'Special Responders',
            desc: 'Be connected through a four-week Police and Fire program building confidence, relationships, and trust.'
        },
        {
            icon: 'fa-kit-medical',
            title: 'First-Aid Training',
            desc: 'Hands-on practical first-aid education and preparedness.'
        },
        {
            icon: 'fa-dog',
            title: 'K-9 Demonstration',
            desc: 'A Sheriff’s Department K-9 demonstration and community safety engagement.'
        },
        {
            icon: 'fa-campground',
            title: 'Outdoor & Survival Skills',
            desc: 'Hands-on learning, teamwork, and practical outdoor survival skills.'
        },
        {
            icon: 'fa-tree',
            title: 'Punderson Cabin Experience',
            desc: 'A memorable cabin experience at Punderson State Park.'
        },
        {
            icon: 'fa-utensils',
            title: 'Cooking Lessons',
            desc: 'Cooking lessons at the Loretta Paganini School of Cooking to learn skills to bless others.'
        },
        {
            icon: 'fa-bus',
            title: 'Holden Arboretum Tour',
            desc: 'Tram tour at Holden Arboretum with a special service project included.'
        },
        {
            icon: 'fa-hand-holding-heart',
            title: 'Community Service',
            desc: 'Ongoing projects supporting local organizations and individuals in need.'
        }
    ];

    return (
        <div className="kaPage">
            {/* Section 1: Hero Header (Title Only) */}
            <div className="kaHeader">
                <div className="kaHeaderOverlay"></div>
                <motion.div 
                    className="kaHeaderContent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Kingdom Abilities</h1>
                    <button
                        className="kaDonateButton"
                        aria-label="Donate"
                        onClick={() => {
                            if (window.gtag) {
                                window.gtag('event', 'conversion', { send_to: 'AW-17675757170/9DzTCJGZ0dMbEPLMuuxB' });
                            }
                            window.open('https://vitality-church.churchhalo.app', '_blank', 'noopener');
                        }}
                    >
                        Donate
                    </button>
                </motion.div>
            </div>

            {/* Section 2: Subtext & Core Belief */}
            <section className="kaIntroSection">
                <div className="kaIntroContainer">
                    <motion.div 
                        className="kaIntroCard"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="kaIntroLead">
                            Kingdom Abilities is a nonprofit program created for adults with special needs, providing meaningful opportunities to serve others, give back, build confidence, and make a positive impact throughout the community.
                        </p>
                        <div className="kaTaglineCard">
                            <span>We believe that small acts of kindness can make a big difference.</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Hands-On Service Abilities (Title spanning the top) */}
            <section className="kaServiceSection">
                <motion.div 
                    className="kaServiceHeader"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Hands-On Service Abilities</h2>
                    <h3>Serving Locally &amp; Globally</h3>
                </motion.div>

                <div className="kaServiceContainer">
                    <motion.div 
                        className="kaServiceTextWrap"
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="kaServiceIntro">
                            As the program gets underway, participants will have opportunities to take part in hands-on service projects that bless others both locally and beyond our community.
                        </p>
                        <p className="kaServiceSubIntro">
                            Some projects will include:
                        </p>
                        <ul className="kaServiceBulletList">
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span><strong>Supporting the USO and local veterans</strong>, providing care packages, support, and community appreciation.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span><strong>Operation Christmas Child</strong>, helping children around the world receive Christmas shoeboxes filled with gifts and essentials.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        className="kaServiceImageWrap"
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img 
                            src={kaLogo} 
                            alt="Kingdom Abilities Logo" 
                            className="kaLogoImg"
                            loading="lazy" 
                            decoding="async" 
                        />
                    </motion.div>
                </div>
            </section>

            {/* Section 4: Future Activities & Projects */}
            <section className="kaActivitiesSection">
                <motion.div 
                    className="kaActivitiesHeader"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Future Activities &amp; Service Projects</h2>
                    <p>Exciting hands-on experiences designed to build practical skills, friendship, and confidence while serving others.</p>
                </motion.div>

                <div className="kaActivitiesGrid">
                    {futureActivities.map((act, index) => (
                        <motion.div 
                            key={index}
                            className="kaActivityCard"
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <div className="kaActivityIcon">
                                {act.icon === 'badge' ? (
                                    <BadgeIcon />
                                ) : (
                                    <i className={`fa-solid ${act.icon}`}></i>
                                )}
                            </div>
                            <h3>{act.title}</h3>
                            <p>{act.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section 5: Purpose & Belonging Banner */}
            <section className="kaPurposeBanner">
                <motion.div 
                    className="kaPurposeContent"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <img src={crossImage} alt="Vitality Logo" className="kaCrossLogo" />
                    <h2>More Than Activities</h2>
                    <p className="kaPurposeMain">
                        At the heart of every Kingdom Abilities event is a service project. We want participants to discover that they have valuable gifts, talents, and abilities that can be used to serve others.
                    </p>
                    <div className="kaThreePillarsRow">
                        <div className="kaPillarItem">
                            <i className="fa-solid fa-bullseye"></i>
                            <span>Purpose</span>
                        </div>
                        <div className="kaPillarDivider"></div>
                        <div className="kaPillarItem">
                            <i className="fa-solid fa-people-group"></i>
                            <span>Belonging</span>
                        </div>
                        <div className="kaPillarDivider"></div>
                        <div className="kaPillarItem">
                            <i className="fa-solid fa-hand-holding-heart"></i>
                            <span>Giving</span>
                        </div>
                    </div>
                    <p className="kaPurposeClosing">
                        Kingdom Abilities is about more than activities. It is about purpose. It is about belonging. It is about discovering that everyone has something meaningful to give.
                    </p>
                </motion.div>
            </section>

            {/* Section 6: Program Information & Contact */}
            <section className="kaInfoSection">
                <motion.div 
                    className="kaInfoHeader"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Program Information</h2>
                </motion.div>

                <div className="kaInfoGrid">
                    {/* Location Info */}
                    <motion.div 
                        className="kaInfoCard"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="kaInfoCardIcon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <h3>Meeting Locations</h3>
                        <p>
                            Kingdom Abilities will be based at <strong>Claridon Township Hall</strong> and will also meet at various locations throughout the community.
                        </p>
                    </motion.div>

                    {/* Class Size Info */}
                    <motion.div 
                        className="kaInfoCard"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="kaInfoCardIcon">
                            <i className="fa-solid fa-users"></i>
                        </div>
                        <h3>Personal Experience</h3>
                        <p>
                            To provide a more personal and meaningful experience, class sizes will be limited to approximately <strong>7–10 participants</strong>.
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        className="kaInfoCard"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="kaInfoCardIcon kaInfoCardPhotoIcon">
                            <img src={rondaKern} alt="Ronda Kern" />
                        </div>
                        <h3>For More Information</h3>
                        <p className="kaContactCardText">
                            <strong>Ronda Kern</strong>
                            <br />
                            <a href="tel:440-290-0233" className="kaContactTextLink">(440) 290-0233</a>
                            <br />
                            <a href="mailto:office@vitalitychurch.org" className="kaContactTextLink">office@vitalitychurch.org</a>
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
