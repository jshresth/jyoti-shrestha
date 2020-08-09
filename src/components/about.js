import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/jyoti.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <div className="btn-abt">
                <span>Communication</span>
                <span>Teamwork</span>
                <span>Problem Solving</span>
                <span>Flexibilty</span>
              </div>
              <p>
                I'm a senior studying Computer Science at Western Michigan
                University. I aspire to become a Software Engineer. I love
                building things and solving creative problems.
              </p>
              <p>I love hiking and I want to travel the world.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Jyoti Shrestha</span>
                    <br />
                    <span>
                      839W Walnut st, apt B
                      <br />
                      Kalamazoo, MI, 49007 US
                    </span>
                    <br />
                    <span>(682)226-5758</span>
                    <br />
                    <span>jyoti.shrestha@wmich.edu</span>
                    <br />
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href="https://drive.google.com/file/d/1XU45NQTzE34rxp4XkkzqYR_KsPQ8KJLL/view?usp=sharing"
                      className="button"
                    >
                      <i className="fa fa-download" />
                      Resume
                    </a>
                  </p>
                </div>
              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
