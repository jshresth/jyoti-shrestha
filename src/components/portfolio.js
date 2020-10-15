import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1 style={{ fontSize: "30px" }}>Projects</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img alt="" src="images/portfolio/commerce.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Tele Shop Nepal</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02">
                      <img alt="" src="images/portfolio/corona.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Coronavirus_Tracker</h5>
                          <p>Android Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03">
                      <img alt="" src="images/portfolio/s-resume.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Resume Builder</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04">
                      <img alt="" src="images/portfolio/s-location.jpeg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>WhereUAt??</h5>
                          <p>Android Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05">
                      <img alt="" src="images/portfolio/farmerboy.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>React Project</h5>
                          <p>React</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
              </div>{" "}
              {/* portfolio-wrapper end */}
            </div>{" "}
            {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/tele.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Tele Shop Nepal</h4>
                <p>
                  Tele Shop Nepal is an E-commerce platform for a company based
                  in Nepal.
                </p>
              </div>
              <div className="link-box">
                <a href="http://teleshop-n.epizy.com/">Website</a> <span></span>
                <a
                  href="https://github.com/jshresth/OnlineWebsite"
                  style={{ margin: "43px" }}
                >
                  Github
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-corona.jpeg"
                alt=""
              />
              <div className="description-box">
                <h4>Coronavirus_Tracker</h4>
                <p>
                  An android app that collects and displays the statistics for
                  COVID-19 cases globally. Technologies Used: REST API, JSON
                  data and Volley Library to fetch data.
                </p>
              </div>
              <div className="link-box">
                <a href="https://drive.google.com/file/d/1HoundcOovRTVetsZOIPu6vit1VVxmVVY/view?usp=sharing">
                  Demo
                </a>
                <a
                  href="https://github.com/pratiksha16/Coronavirus_Tracker"
                  style={{ margin: "43px" }}
                >
                  Github
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/s-resume.png"
                alt=""
              />
              <div className="description-box">
                <h4>Resume Builder</h4>
                <p>
                  It is a website that helps the user to choose a resume
                  template of their choice and build their own resume.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Branding
                </span>
              </div>
              <div className="link-box">
                <a href="#">Demo</a>
                <a
                  href="https://github.com/jshresth/Resume_Builder"
                  style={{ margin: "43px" }}
                >
                  Github
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-location.jpeg"
                alt=""
              />
              <div className="description-box">
                <h4>WhereUAt??</h4>
                <p>
                  An android application that traces the location of your lost
                  friend in case of medical emergencies.
                </p>
              </div>
              <div className="link-box">
                <a href="#">Demo</a>
                <a
                  href="https://github.com/pratiksha16/FindMyFriends"
                  style={{ margin: "43px" }}
                >
                  Github
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-farmerboy.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>React App</h4>
                <p>An app using React.</p>
              </div>
              <div className="link-box">
                <a href="#">Demo</a>
                <a href="#" style={{ margin: "43px" }}>
                  Github
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-07 End */}
            {/* modal-01 End */}
          </div>{" "}
          {/* row End */}
        </section>
      </React.Fragment>
    );
  }
}
