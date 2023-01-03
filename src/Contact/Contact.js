export default function Contact() {
  return (
    <>
      <div className="container-fluid contactus-header">
        <div className="contactus-header-heading">Contact Us</div>
        <div className="contactus-header-title">You can contact us anytime, we are always here for you.</div>
      </div>
      <div className="container-fluid contactus-main-content">
        <div className="row p-0 m-0">
          <div className="col-sm-7 mapbox">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d141083.2135199492!2d77.43717283385908!3d23.198925485359915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1587298679275!5m2!1sen!2sin" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" className="map" title="google-maps"></iframe>
          </div>
          <div className="col-sm-5 contactus-info">
            <div className="contactus-info-line1">Contact Info</div>
            <div className="contactus-info-line2">Get In Touch</div>
            <div className="contactus-info-line3">Do you have anything in your mind to tell us? Please don't hesitate to get in touch with us via our contact form.</div>
            <a href="mailto:prjeventmanagement@gmail.com" className="contactus-info-line4">
              <i className="far fa-envelope contactus-info-icon"></i> &nbsp;&nbsp;prjeventmanagement@gmail.com
            </a>
            <div className="contactus-info-line4">
              <i className="fas fa-map-marker-alt contactus-info-icon" style={{ float: "left" }}></i>
              <div style={{ lineHeight: "130%" }}>
                &nbsp&nbsp;&nbsp;Bhopal 462026 <br />
                &nbsp;&nbsp;&nbsp;MP India
              </div>
            </div>
            <a href="tel:7354974047" className="contactus-info-line4" style={{ color: "orangered" }}>
              <i className="fas fa-phone-alt contactus-info-icon"></i> &nbsp;&nbsp;(+91) 7354974047
            </a>

            <div className="contactus-info-messageus-buttonbox">
              <a href="https://forms.gle/SqStG8uJ2AYedMKe6" target="_blank" rel="noreferrer">
                <div className="btn rounded-pill contactus-info-messageus-button">Message Us</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
