import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 footer-links">
                <h4>ABOUT</h4>
                <p>
                  An initiative to impart industrial skills and knowledge to the
                  budding workforce of tomorrow at a minimal and affordable
                  subscription cost.
                  <br />
                  <br />
                  CodeBinary's own Virtual Learning Platform is a rich-UI portal
                  that makes learning-in-process quick and efficient.
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="terms-of-service.html">Terms of Service</a>
                  </li>
                  <li>
                    <a href="acceptable-use-policy.html">
                      Acceptable Use Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://codebinary.in/sitemap.xml">
                      <i className="fa fa-sitemap" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  FF-27,Cross Road Mall,Central Spine,
                  <br /> Vidhyadhar Nagar, Jaipur
                  <br />
                  Rajasthan, 302039 <br />
                  India <br />
                  <strong>Email:</strong> contact@codebinary.in
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-newsletter">
                <h4>Our Partners</h4>

                <div className="owl-carousel testimonials-carousel">
                  <div className="testimonial-item">
                    <a
                      href="https://kalpanaa.codebinary.in/"
                      className="scrollto"
                    >
                      <img
                        src="img/kalpanaa.jpg"
                        style={{ height: "120px" }}
                        alt="Kalpanaa"
                        target="_blank"
                      />
                    </a>
                  </div>
                  <div className="testimonial-item">
                    <a
                      href="https://www.sproutingwingsdigitalmarketing.com/"
                      className="scrollto"
                    >
                      <img
                        src="img/spdm.jpeg"
                        style={{ height: "120px" }}
                        alt="Sprouting Wings Digital Marketing"
                        target="_blank"
                      />
                    </a>
                  </div>
                  <div className="testimonial-item">
                    <a href="https://www.instamojo.com/" className="scrollto">
                      <img
                        src="img/instamojo.png"
                        style={{
                          height: "120px",
                          width: "120px",
                          float: "center"
                        }}
                        alt="Instamojo"
                        target="_blank"
                      />
                    </a>
                  </div>
                  <div className="testimonial-item">
                    <a href="https://www.tawk.to/" className="scrollto">
                      <img
                        src="img/tawk.jpg"
                        style={{
                          height: "120px",
                          width: "120px",
                          float: "center"
                        }}
                        alt="Twak.to"
                        target="_blank"
                      />
                    </a>
                  </div>
                  <div className="testimonial-item">
                    <a href="https://www.ringcentral.com/" className="scrollto">
                      <img
                        src="img/ringcentral.png"
                        style={{
                          height: "120px",
                          width: "120px",
                          float: "center"
                        }}
                        alt="Ring Central GLIP"
                        target="_blank"
                      />
                    </a>
                  </div>
                  <div className="testimonial-item">
                    <a href="https://www.namecheap.com/" className="scrollto">
                      <img
                        src="img/namecheap.png"
                        style={{
                          height: "120px",
                          width: "120px",
                          float: "center"
                        }}
                        alt="Namecheap"
                        target="_blank"
                      />
                    </a>
                  </div>
                  <div className="testimonial-item">
                    <a href="https://www.setmore.com/" className="scrollto">
                      <img
                        src="img/setmore.png"
                        style={{
                          height: "120px",
                          width: "120px",
                          float: "center"
                        }}
                        alt="Setmore"
                        target="_blank"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12 footer-contact text-center">
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/company/codebinary/"
                    id="login"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a
                    href="https://www.instagram.com/codebinary.initiatives/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                  <a
                    href="https://github.com/projectcodebinary"
                    className="github"
                    target="_blank"
                  >
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            A Project by <strong>CodeBinary Initiatives</strong>
            <br />
            Registered Under{" "}
            <strong>Ministry of Micro, Small & Medium Enterprises, GoI</strong>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
