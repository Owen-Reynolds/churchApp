import './Connect.css';

export default function Connect() {
    return(
    <>
        <div className="connectContent">
            <div className="connectText">
                <h1>Contact Us</h1>
                <p>Have a question or need help? We would love to hear from you. Fill out the form below and we will get back to you as soon as possible.</p>
                <div className="contactBox">
                    <div className="phoneBox">
                        <img src="" alt="" />
                        <p>(440)-290-0233</p>
                    </div>
                    <div className="locationBox">
                        <img src="" alt="" />
                        <p>Address goes here...</p>
                    </div>
                </div>
            </div>
            <div className="connectForm">
                <form action="">
                    <div className="nameBox">
                        <label htmlFor="">Name</label>
                        <div className="nameBox"></div>
                    </div>
                </form>
            </div>
        </div>
        

    </>
    );
}