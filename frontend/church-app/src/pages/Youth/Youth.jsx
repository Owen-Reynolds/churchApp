import React from 'react';
import './Youth.css';
import './MobileYouth.css';

export default function Youth() {

    return (
        <>
        <div className = "yMain">
            <h1>Youth Ministry</h1>
            <div className = "yMainLeft">
                <p>Vitality Church Youth Ministry is an exciting and vital part of the church community, dedicated to nurturing the spiritual growth and engagement of young individuals. It offers a vibrant space where youth can 
                    explore their faith, build a strong moral foundation, and actively participate in church life. </p>
                <img src={main2}></img>
            </div>
            <div className = "yMainRight">
                <img src = {main1}></img>
                <p> By involving youth in activities such as worship, service projects, and leadership roles, Youth Ministry ensures the continuity of faith and community while empowering the next generation to become leaders and stewards of the faith. It's all about creating a sense of belonging and identity 
                    among our youth connecting them with their relationship with Jesus, and encouraging a lifelong commitment to the church.</p>
            </div>
        </div>

    </>
    );
}