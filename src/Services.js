import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <div className="container-fluid services-header">
        <div className="services-header-heading">Our Services</div>
        <div className="services-header-title">We are here to provide you with the best services and the memories that you never forget.</div>
      </div>

      <div className="container-fluid p-0">
        <div className="row servicebox">
          <div className="col-sm-6 service-imagebox">
            <img src="/images/services-image1.jpg" className="service-image" alt="services" />
          </div>
          <div className="col-sm-6 service-detailbox">
            <div className="service-number">01</div>
            <div className="service-descriptionbox">
              <div className="service-title">Birthdays</div>
              <div className="service-description">
                <p>Every year there's a day you are waiting for many months called birthday, but we know that it means something more than that. It indicates a completion of another whole beautiful year in this world.</p>
                <p>So we are here to make your day more special and memorable. We know that you are waiting for this to celebrate with your family and friends, so we make your birthdays more special, fun, unique and more memorable.</p>
              </div>
              <div className="services-statsbox">
                <div>
                  <i className="far fa-clock services-stats-icon"></i> 5-6 Hours
                </div>
                <div>
                  <i className="fas fa-user-friends services-stats-icon"></i>Up To 100 Persons
                </div>
              </div>
              <Link to="/all-services/birthdays">
                <div className="btn rounded-pill service-view-button">View Details</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row servicebox" style={{ backgroundColor: "#f7f7f7" }}>
          <div className="col-sm-6 order-12 order-sm-first service-detailbox" style={{ padding: "8% 2.5% 8% 0%" }}>
            <div className="service-number">02</div>
            <div className="service-descriptionbox">
              <div className="service-title">Wedding</div>
              <div className="service-description">
                <p>Every year there's a day you are waiting for many months called birthday, but we know that it means something more than that. It indicates a completion of another whole beautiful year in this world.</p>
                <p>So we are here to make your day more special and memorable. We know that you are waiting for this to celebrate with your family and friends, so we make your birthdays more special, fun, unique and more memorable.</p>
              </div>
              <div className="services-statsbox">
                <div>
                  <i className="far fa-clock services-stats-icon"></i> 3-4 Days
                </div>
                <div>
                  <i className="fas fa-user-friends services-stats-icon"></i>Upto 2000 Persons
                </div>
              </div>
              <Link to="/all-services/wedding">
                <div className="btn rounded-pill service-view-button">View Details</div>
              </Link>
            </div>
          </div>
          <div className="col-sm-6 service-imagebox">
            <img src="/images/services-image2.jpg" className="service-image" alt="services" />
          </div>
        </div>
        <div className="row servicebox">
          <div className="col-sm-6 service-imagebox">
            <img src="/images/services-image3.jpg" className="service-image" alt="services" />
          </div>
          <div className="col-sm-6 service-detailbox">
            <div className="service-number">03</div>
            <div className="service-descriptionbox">
              <div className="service-title">Corporate</div>
              <div className="service-description">
                <p>Every year there's a day you are waiting for many months called birthday, but we know that it means something more than that. It indicates a completion of another whole beautiful year in this world.</p>
                <p>So we are here to make your day more special and memorable. We know that you are waiting for this to celebrate with your family and friends, so we make your birthdays more special, fun, unique and more memorable.</p>
              </div>
              <div className="services-statsbox">
                <div>
                  <i className="far fa-clock services-stats-icon"></i> 4-6 Hours
                </div>
                <div>
                  <i className="fas fa-user-friends services-stats-icon"></i>50-200 Persons
                </div>
              </div>
              <Link to="/all-services/corporate">
                <div className="btn rounded-pill service-view-button">View Details</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row servicebox" style={{ backgroundColor: "#f7f7f7" }}>
          <div className="col-sm-6 order-12 order-sm-first service-detailbox" style={{ padding: "8% 2.5% 8% 0%" }}>
            <div className="service-number">04</div>
            <div className="service-descriptionbox">
              <div className="service-title">Party & Events</div>
              <div className="service-description">
                <p>Every year there's a day you are waiting for many months called birthday, but we know that it means something more than that. It indicates a completion of another whole beautiful year in this world.</p>
                <p>So we are here to make your day more special and memorable. We know that you are waiting for this to celebrate with your family and friends, so we make your birthdays more special, fun, unique and more memorable.</p>
              </div>
              <div className="services-statsbox">
                <div>
                  <i className="far fa-clock services-stats-icon"></i> 4-10 Hours
                </div>
                <div>
                  <i className="fas fa-user-friends services-stats-icon"></i>50-1000 Persons
                </div>
              </div>
              <Link to="/all-services/party-and-events">
                <div className="btn rounded-pill service-view-button">View Details</div>
              </Link>
            </div>
          </div>
          <div className="col-sm-6 service-imagebox">
            <img src="/images/services-image4.jpg" className="service-image" alt="services" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row service-special-event">
          <div className="col-sm-4 p-0">
            <div className="service-special-event-col1">
              <div className="service-special-event-col1-heading">
                Looking for something
                <br />
                very special?
              </div>
              <div className="service-special-event-col1-description">
                Have you ever have an idea on how you should celebrate or organise an event and just didn't because you don't know how to do it?
                <br />
                <br />
                Don't worry we got you covered. We are here to plan your idea and exucute it for you. For custom events message us with your idea and we will be in contact with you, with the best plans to execute it.
              </div>
            </div>
          </div>
          <div className="col-sm-5 service-special-event-imagebox">
            <img src="/images/special-event-image.png" className="service-special-event-image" alt="special-event" />
          </div>
          <div className="col-sm-3 p-0">
            <div className="service-special-buttonbox">
              <div className="service-special-buttonbox-title">Click Here!</div>
              <a href="https://forms.gle/SqStG8uJ2AYedMKe6" target="_blank" rel="noreferrer">
                <div className="btn rounded-pill service-special-button">Get in touch</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
