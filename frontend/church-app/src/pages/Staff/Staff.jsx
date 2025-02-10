import "./staff.css";
import heartrate from '../../assets/heartRateVid.mp4';
import background from '../../assets/staffBottom.svg';

export default function AboutUs() {
    return(
    <>
    <body>
    <div className="staffHeader">
         <video className="heartvid" src ={heartrate} autoPlay loop muted/>
        <h1>Meet the Team.</h1>
    </div>
    <div className="mainStaffContent">
       <div className="cards">
        
       </div>
    </div>
    </body>
    </>
    );
    
}