import "./staff.css";
import heartrate from '../../assets/heartRateVid.mp4';


export default function AboutUs() {
    return(
    <>
    <body>
    <div className="header">
         <video src ={heartrate} autoPlay loop muted/>
        <h1>Meet the Team.</h1>
    </div>
    </body>
    </>
    );
    
}