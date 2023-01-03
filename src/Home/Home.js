import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row header pt-0">
          <div className="col-12 col-md-6 header-col-1">
            <div className="header-starting-title">Celebrate as you please</div>
            <div className="header-main-title">
              It's&nbsp;Time&nbsp;To
              <br />
              Celebrate!
            </div>
            <div className="header-paragraph text-center px-5">Every moment adds a memory in our collection,<br/> and we are here to make that memory more special.</div>
            <div className="header-buttons">
              <Link to="/about">
                <div className="btn btn-outline-light rounded-pill header-first-button mr-2">about us</div>
              </Link>
              <a href="https://forms.gle/SqStG8uJ2AYedMKe6" target="_blank" rel="noreferrer">
                <div className="btn btn-primary rounded-pill header-second-button">online request</div>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 header-col-2">
            <div className="">
              <div className="header-imagebox-1">
                <img src="/images/header-image-1.jpg" className="header-image" alt="header-imagebox-1" />
              </div>
              <div className="header-imagebox-2">
                <img src="/images/header-image-2.jpg" className="header-image" alt="header-imagebox-2" />
              </div>
              <div className="header-imagebox-3">
                <img src="/images/header-image-3.jpg" className="header-image" alt="header-imagebox-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 pt-5 pb-5" id="events">
        <div className="text-center pt-4 services-main-title">Hello There!</div>
        <div className="text-center services-main-heading">
          We will give a very special <br />
          celebration for you
        </div>
        <div className="row services">
          <div className="col-12 col-md-3 p-0 px-3">
            <div className="services-image-box">
              <img src="/images/birthday.jpg" className="services-image" alt="birthday" />
            </div>
            <Link to="/all-services/birthdays">
              <div className="services-heading">Birthdays</div>
            </Link>
            <div className="services-description">Every birthday is special and we are here to make that more special and memorable.</div>
          </div>
          <div className="col-12 col-md-3 p-0 px-3">
            <div className="services-image-box">
              <img src="/images/wedding.jpg" className="services-image" alt="wedding" />
            </div>
            <Link to="/all-services/wedding">
              <div className="services-heading">Wedding</div>
            </Link>
            <div className="services-description">Every birthday is special and we are here to make that more special and memorable.</div>
          </div>
          <div className="col-12 col-md-3 p-0 px-3">
            <div className="services-image-box">
              <img src="/images/office-party.jpg" className="services-image" alt="office-party" />
            </div>
            <Link to="/all-services/corporate">
              <div className="services-heading">Corporate</div>
            </Link>
            <div className="services-description">Every birthday is special and we are here to make that more special and memorable.</div>
          </div>
          <div className="col-12 col-md-3 p-0 px-3">
            <div className="services-image-box">
              <img src="/images/night-party.jpg" className="services-image" alt="night-party" />
            </div>
            <Link to="/all-services/party-and-events">
              <div className="services-heading">Party & Events</div>
            </Link>
            <div className="services-description">Every birthday is special and we are here to make that more special and memorable.</div>
          </div>
        </div>
        <div className="text-center pb-5">
          <Link to="/all-services/birthdays">
            <div className="btn btn-default rounded-pill services-more-services-button">More Services</div>
          </Link>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row other-services">
          <div className="col-12 col-md-8 other-services-col-1">
            <div className="row m-0 other-services-padding">
              <div className="col-md-6 mb-5">
                <div className="row">
                  <div className="col-3 px-3 pt-2">
                    <Link to="/all-services/floral">
                      <div className="other-services-icon-box text-center">
                        <i className="fas fa-leaf other-services-icon"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="col-9">
                    <Link to="/all-services/floral">
                      <p className="other-services-subcontent-heading">Floral Services</p>
                    </Link>
                    <p className="other-services-subcontent-description">With Smile, you can get any type of floral composition.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="row">
                  <div className="col-3 px-3 pt-2">
                    <Link to="/all-services/photos-and-videos">
                      <div className="other-services-icon-box text-center">
                        <i className="fas fa-camera fa-3x other-services-icon"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="col-9">
                    <Link to="/all-services/photos-and-videos">
                      <p className="other-services-subcontent-heading">Photos & Videos</p>
                    </Link>
                    <p className="other-services-subcontent-description">Capture the best moment with our photography and videography.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="row">
                  <div className="col-3 px-3 pt-2">
                    <Link to="/all-services/entertainment">
                      <div className="other-services-icon-box text-center">
                        <i className="fas fa-music fa-3x other-services-icon"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="col-9">
                    <Link to="/all-services/entertainment">
                      <p className="other-services-subcontent-heading">Entertainment</p>
                    </Link>
                    <p className="other-services-subcontent-description">Our entertainment services are limited only by your needs.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-3 px-3 pt-2">
                    <Link to="/all-services/catering-and-decor">
                      <div className="other-services-icon-box text-center">
                        <i className="fas fa-gem fa-3x other-services-icon"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="col-9">
                    <Link to="/all-services/catering-and-decor">
                      <p className="other-services-subcontent-heading">Catering & Decor</p>
                    </Link>
                    <p className="other-services-subcontent-description">We provide high quality event-decor and catering services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 other-services-col-2">
            <div className="other-services-title">Other Services</div>
            <div className="other-services-heading">
              We also <br />
              provide
            </div>
            <div className="pb-4">Each event and client is unique, and we believe our services should be as well. We know what hiring planner is all about!</div>
            <Link to="/all-services/floral">
              <div className="btn rounded-pill other-services-buttton">More Services</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid how-it-work">
        <div className="how-it-work-title">How it works</div>
        <div className="how-it-work-heading">
          It's simple. You have an event <br />
          to plan and we have the solutions
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="how-it-work-number">
              <img src="/images/process-bar-icon.svg" style={{ width: "15%" }} alt="process-bar-icon" />
              <br />1
            </div>
            <div className="how-it-work-description">
              Find the perfect <br />
              venue for free
            </div>
          </div>
          <div className="col-sm-4">
            <div className="how-it-work-number">
              <img src="/images/process-bar-icon.svg" style={{ width: "15%" }} alt="process-bar-icon" />
              <br />2
            </div>
            <div className="how-it-work-description">
              Connect with the <br />
              best vendor
            </div>
          </div>
          <div className="col-sm-4">
            <div className="how-it-work-number">
              <img src="/images/process-bar-icon.svg" style={{ width: "15%" }} alt="process-bar-icon" />
              <br />3
            </div>
            <div className="how-it-work-description">
              Let us help you <br />
              with the event
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid about-us" id="about-us">
        <div className="row">
          <div className="col-sm-6">
            <div className="about-us-heading">
              We are a <br />
              professional
              <span>
                event
                <br />
                management
              </span>
              agency
            </div>
          </div>
          <div className="col-sm-6 about-us-content">
            <div className="about-us-text-1">PRJ Event Mnagement was created by pairing together our passion for business to organize great events.</div>
            <div className="about-us-text-2">We bring a fresh, unique approach to the event management industry. Our team understands that a properly executed event can be leveraged to support an organization's strategic vision, incorporated into a company's marketing plan, or used to build networks and client loyalty that are really priceless</div>
          </div>
        </div>
      </div>

      <div className="container-fluid testimonial">
        <div className="testimonial-title">Testimonials</div>
        <div className="testimonial-heading">What peoples say</div>
        <div className="row testimonial-client-main-box">
          <div className="col-sm-6">
            <div className="testimonial-client-review">"It's easy to impress me. I don't need a fany party to be haapy. Just good friends, good food, and good laughs. I'm happy. I'm satisfied. I'm content"</div>
            <div className="row testimonial-client-box">
              <div className="col-sm-4">
                <img src="/images/client-female.svg" className="testimonial-client-image" alt="testimonial-client" />
              </div>
              <div className="col-sm-8 p-0">
                <div className="testimonial-client-name">Sonali Batham</div>
                <div className="testimonial-client-title">Client</div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="testimonial-client-review">"It's easy to impress me. I don't need a fany party to be haapy. Just good friends, good food, and good laughs. I'm happy. I'm satisfied. I'm content"</div>
            <div className="row testimonial-client-box">
              <div className="col-sm-4">
                <img src="/images/client-male.svg" className="testimonial-client-image" alt="testimonial-client" />
              </div>
              <div className="col-sm-8 p-0">
                <div className="testimonial-client-name">Vijay Patel</div>
                <div className="testimonial-client-title">Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid team-member">
        <div className="team-member-heading">Our Creative Team</div>
        <div className="row pt-5">
          <div className="col-6 col-md-3 team-member-image-box">
            <img src="/images/team-member1.jpg" className="team-member-image" alt="team-member-1" />
            <div className="team-member-name">Sodan meena</div>
            <div className="team-member-position">Cordinator</div>
          </div>
          <div className="col-6 col-md-3 team-member-image-box">
            <img src="/images/team-member2.jpg" className="team-member-image" alt="team-member-2" />
            <div className="team-member-name">Richa Chakarvarti</div>
            <div className="team-member-position">Company Founder</div>
          </div>
          <div className="col-6 col-md-3 team-member-image-box">
            <img src="/images/team-member3.jpg" className="team-member-image" alt="team-member-3" />
            <div className="team-member-name">Pankaj Barman</div>
            <div className="team-member-position">Technical Architect</div>
          </div>
          <div className="col-6 col-md-3 team-member-image-box">
            <img src="/images/team-member4.jpg" className="team-member-image" alt="team-member-4" />
            <div className="team-member-name">Purushottam jatav</div>
            <div className="team-member-position">Coordinator</div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row never-miss-a-moment">
          <div className="col-md-6 never-miss-a-moment-col-1">Never Miss a Moment!</div>
          <div className="col-md-6 never-miss-a-moment-col-2">
            <input type="text" placeholder="Enter Your Email" className="never-miss-a-moment-email" />
            <a href="#">
              <div className="btn rounded-pill never-miss-a-moment-button">Submit Info</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
