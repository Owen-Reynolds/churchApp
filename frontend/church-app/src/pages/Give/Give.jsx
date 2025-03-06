import './give.css';

export default function Give() {
    return(
    <>
        <div className="give-container">
            <h1>Support Our Mission</h1>
            <p>Your generous donations help us continue our work and support our community.</p>
            <a href="https://www.paypal.com/donate/?hosted_button_id=Q4SNR47UHK2DE" target="_blank" rel="noopener noreferrer">
      <button className="donate-button">Donate</button>
            </a>
        </div>
    </>
    );
}