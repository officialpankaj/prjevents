export default function Footer() {
  return (
    <div className="container-fluid footer-main">
      <div className="row footer m-0">
        <div className="col-sm-6 footer-col-1">
          <div className="footer-company-name-box">
            <img src="/images/logo.svg" className="footer-logo" alt="logo" />
          </div>
          <div className="pl-2">
            <a className="footer-social-icons mr-2 d-flex justify-content-center align-items-center" href="https://www.facebook.com/PRJ-Event-Management-106491587688356/" target="_blank" rel="noreferrer" style={{ width: "45px", height: "45px" }}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="footer-social-icons mr-2 d-flex justify-content-center align-items-center" href="https://www.instagram.com/prjevents_official/" target="_blank" rel="noreferrer" style={{ width: "45px", height: "45px" }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a className="footer-social-icons d-flex justify-content-center align-items-center" href="https://twitter.com/prjevents" target="_blank" rel="noreferrer" style={{ width: "45px", height: "45px" }}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="col-sm-6 footer-col-2">
          <div className="footer-col-2-line-1">Call Now For Services!</div>
          <div className="footer-col-2-line-2">+91 7354974047</div>
          <div className="footer-col-2-line-3">
            <i className="far fa-envelope fa-lg" style={{ color: "#ffd909", paddingTop: "1%" }}></i> Mail Us : prjeventmanagement@gmail.com
          </div>
          <div className="footer-col-2-line-4">
            Bhopal, INDIA
            <br />
            462026
          </div>
        </div>
      </div>
      <div className="row footer-copyright">
        <div>PRJ Events &copy; 2020. All Rights Reserved.</div>
      </div>
    </div>
  );
}
