import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './WhatNext.css';
import './MobileWhatNext.css';
import logo from '../../assets/vitalitylogoblue.png';
import baptismImage from '../../assets/homePageAssets/thumbnail_IMG_6616.webp';

export default function NextSteps() {
    const { section } = useParams();

    useEffect(() => {
        if (!section) {
            return;
        }

        const normalized = section.toLowerCase();
        const sectionMap = {
            serveteam: 'serve-team',
            baptism: 'baptism',
            discipleshippath: 'discipleship-path',
            'discipleship-path': 'discipleship-path'
        };

        const targetId = sectionMap[normalized];
        if (!targetId) {
            return;
        }

        setTimeout(() => {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 0);
    }, [section]);

    return (
        <>
            <div className="nextStepsContent">
                <div className="nextStepsText">
                    <div className="nextStepsTitle">
                        <h1>Next <b>Steps.</b></h1>
                    </div>
                    <div className="nextStepsSubtitle">
                        <ul>
                            <li>Attend Wednesday Nights</li>
                            <li>Join a Disciple Path</li>
                            <li>Serve a Team</li>
                            <li>Baptism</li>
                        </ul>
                    </div>
                    <div className="nextStepsLogo">
                        <img src={logo} alt="" decoding="async" />
                    </div>
                </div>
            </div>

            <section id="discipleship-path" className="discipleshipPathSection">
                <h2>Discipleship Path</h2>
                <div className="discipleshipFormsGrid">
                    <div className="discipleshipFormCard">
                        <h3>Red Book (Faith Basics)</h3>
                        <p className="discipleshipFormSubtitle">Fill out the form to let Vitality know your interested</p>
                        <form
                            className="discipleshipForm"
                            action="https://opturl.com/h/P48yEVw2"
                            method="post"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="discipleshipFormRow">
                                <input type="text" name="mobile_number" placeholder="Mobile Number *" />
                            </div>
                            <div className="discipleshipFormRow">
                                <input type="text" name="first" placeholder="First Name" />
                            </div>
                            <div className="discipleshipFormRow">
                                <input type="text" name="last" placeholder="Last Name" />
                            </div>
                            <div className="discipleshipFormRow">
                                <input type="text" name="email" placeholder="Email Address" />
                            </div>
                            <div className="discipleshipFormRow">
                                <button type="submit">Subscribe</button>
                            </div>
                            <p className="discipleshipFormTerms">
                                Message &amp; data rates may apply. Message frequency varies.{' '}
                                <a href="https://clst.io/terms" target="_blank" rel="noreferrer">Terms of Service</a>{' '}
                                and{' '}
                                <a href="https://clst.io/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
                            </p>
                        </form>
                    </div>

                    <div className="discipleshipFormCard">
                        <h3>Green Book (Christian Life)</h3>
                        <p className="discipleshipFormSubtitle">Fill out the form to let Vitality know your interested</p>
                        <form
                            className="discipleshipForm"
                            action="https://opturl.com/h/GdanxRZ0"
                            method="post"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="discipleshipFormRow">
                                <input type="text" name="mobile_number" placeholder="Mobile Number *" />
                            </div>
                            <div className="discipleshipFormRow">
                                <input type="text" name="first" placeholder="First Name" />
                            </div>
                            <div className="discipleshipFormRow">
                                <input type="text" name="last" placeholder="Last Name" />
                            </div>
                            <div className="discipleshipFormRow">
                                <input type="text" name="email" placeholder="Email Address" />
                            </div>
                            <div className="discipleshipFormRow">
                                <button type="submit">Subscribe</button>
                            </div>
                            <p className="discipleshipFormTerms">
                                Message &amp; data rates may apply. Message frequency varies.{' '}
                                <a href="https://clst.io/terms" target="_blank" rel="noreferrer">Terms of Service</a>{' '}
                                and{' '}
                                <a href="https://clst.io/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>. To opt-out,
                                text STOP at any time.{' '}
                                <a href="https://clearstream.io" target="_blank" rel="noreferrer">Church software by Clearstream.</a>
                            </p>
                        </form>
                    </div>

                    <div className="discipleshipFormCard">
                        <h3>White Book (Spiritual Gifts)</h3>
                        <p className="discipleshipFormSubtitle">Fill out the form to let Vitality know your interested</p>
                        <form
                            className="discipleshipForm"
                            action="https://opturl.com/h/PZAnjp47"
                            method="post"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="discipleshipFormRow">
                                <input type="text" name="mobile_number" placeholder="Mobile Number *" />
                            </div>
                            <div className="discipleshipFormRow">
                                <input type="text" name="first" placeholder="First Name" />
                            </div>
                            <div className="discipleshipFormRow">
                                <input type="text" name="last" placeholder="Last Name" />
                            </div>
                            <div className="discipleshipFormRow">
                                <input type="text" name="email" placeholder="Email Address" />
                            </div>
                            <div className="discipleshipFormRow">
                                <button type="submit">Subscribe</button>
                            </div>
                            <p className="discipleshipFormTerms">
                                Message &amp; data rates may apply. Message frequency varies.{' '}
                                <a href="https://clst.io/terms" target="_blank" rel="noreferrer">Terms of Service</a>{' '}
                                and{' '}
                                <a href="https://clst.io/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>. To opt-out,
                                text STOP at any time.{' '}
                                <a href="https://clearstream.io" target="_blank" rel="noreferrer">Church software by Clearstream.</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            <section id="baptism" className="baptismSection">
                <h2>Baptism</h2>
                <div className="baptismContent">
                    <div className="baptismFormCard">
                        <h3>Baptism</h3>
                        <p className="baptismFormSubtitle">Fill out the form to let Vitality know your interested</p>
                        <form
                            className="baptismForm"
                            action="https://opturl.com/h/z4e0OaZ7"
                            method="post"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="baptismFormRow">
                                <input type="text" name="mobile_number" placeholder="Mobile Number *" />
                            </div>
                            <div className="baptismFormRow">
                                <input type="text" name="first" placeholder="First Name" />
                            </div>
                            <div className="baptismFormRow">
                                <input type="text" name="last" placeholder="Last Name" />
                            </div>
                            <div className="baptismFormRow">
                                <input type="text" name="email" placeholder="Email Address" />
                            </div>
                            <div className="baptismFormRow">
                                <button type="submit">Subscribe</button>
                            </div>
                            <p className="baptismFormTerms">
                                Message &amp; data rates may apply. Message frequency varies.{' '}
                                <a href="https://clst.io/terms" target="_blank" rel="noreferrer">Terms of Service</a>{' '}
                                and{' '}
                                <a href="https://clst.io/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>. To opt-out,
                                text STOP at any time.{' '}
                                <a href="https://clearstream.io" target="_blank" rel="noreferrer">Church texting software by Clearstream.</a>
                            </p>
                        </form>
                    </div>

                    <div className="baptismImageWrap">
                        <img src={baptismImage} alt="Baptism" loading="lazy" decoding="async" />
                    </div>
                </div>
            </section>

            <section id="serve-team" className="serveTeamSection">
                <h2>Serve Team</h2>
                <div className="serveTeamContent">
                    <div className="serveTeamInfoCard">
                        <h3>Opportunities To Serve</h3>
                        <p>There are many ways to get involved and serve with our church family:</p>
                        <ul>
                            <li>Welcome Team</li>
                            <li>Audio Visual</li>
                            <li>Youth</li>
                            <li>Local Missions</li>
                            <li>Usher</li>
                            <li>Small Group Leader</li>
                            <li>Service Set Up/Clean Up</li>
                            <li>And more</li>
                        </ul>
                    </div>

                    <div className="serveTeamFormCard">
                        <h3>Serve Team</h3>
                        <p className="serveTeamFormSubtitle">Fill out the form if you are interested in serving with Vitality!</p>
                        <form
                            className="serveTeamForm"
                            action="https://opturl.com/h/rZ7yqzwK"
                            method="post"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="serveTeamFormRow">
                                <input type="text" name="mobile_number" placeholder="Mobile Number *" />
                            </div>
                            <div className="serveTeamFormRow">
                                <input type="text" name="first" placeholder="First Name" />
                            </div>
                            <div className="serveTeamFormRow">
                                <input type="text" name="last" placeholder="Last Name" />
                            </div>
                            <div className="serveTeamFormRow">
                                <input type="text" name="email" placeholder="Email Address" />
                            </div>
                            <div className="serveTeamFormRow">
                                <button type="submit">Subscribe</button>
                            </div>
                            <p className="serveTeamFormTerms">
                                Message &amp; data rates may apply. Message frequency varies.{' '}
                                <a href="https://clst.io/terms" target="_blank" rel="noreferrer">Terms of Service</a>{' '}
                                and{' '}
                                <a href="https://clst.io/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>. To opt-out,
                                text STOP at any time.{' '}
                                <a href="https://clearstream.io" target="_blank" rel="noreferrer">Church software by Clearstream.</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
