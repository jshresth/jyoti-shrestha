import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Western Michigan University</h3>
                  <p className="info">
                    BS in Computer Science <span>•</span>{" "}
                    <em className="date">Expected April 2021 </em>
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Norwich University</h3>
                  <p className="info">
                    BS in Computer Science
                    <span>•</span> <em className="date">Aug 2017 – May 2018</em>
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#313131",
                      fontWeight: "bold",
                      marginBottom: "9px",
                      fontFamily: "'opensans-bold', sans-serif",
                    }}
                  >
                    Relevant Courseworks
                  </p>
                  <span>•</span>{" "}
                  <em className="date">Data Structures and Algorithms</em>
                  <br />
                  {"   "}
                  <span>•</span> <em className="date">Database Management</em>
                  {"   "} <br />
                  <span>•</span>
                  {"   "}
                  <em className="date">Introduction to Web Technologies</em>
                  <br /> {"   "}
                  <span>•</span> <em className="date">Android Development</em>
                  {"   "}
                  <br />
                  <span>•</span>
                  {"   "}
                  <em className="date"> Data Analysis with R</em>
                  {"   "} <br />
                  <span>•</span>
                  {"   "}
                  <em className="date">Discrete Mathematics</em>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Delovery</h3>
                  <p className="info">
                    Front-end Developer <span>•</span>{" "}
                    <em className="date">June 2020 – Present</em>
                  </p>
                  <p>
                    Responsible for building and maintaining the store-front and
                    making it mobile-accessible using HTML5, CSS, and
                    JavaScript. Performed bug fixes and modified existing codes
                    on Shopify to match the User Interface requirements.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Mentoring for Success at WMU</h3>
                  <p className="info">
                    Academic Mentor <span>•</span>{" "}
                    <em className="date">Dec 2019 – Present </em>
                  </p>
                  <p>
                    Tutored freshman and sophomores in Computer Science and
                    Mathematics classes, going over course materials. Lead study
                    sessions and helped a group of 10+ students understand
                    programming concepts.
                  </p>
                </div>
              </div>{" "}
              {/* next   */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>MyExamsPrep </h3>
                  <p className="info">
                    CS Tutor <span>•</span>{" "}
                    <em className="date">June 2019 – Aug 2019</em>
                  </p>
                  <p>
                    Instructor for the web development course using HTML, CSS,
                    and Javascript for middle and high school students.
                    Conducted individual study sessions for Introductory Java
                    Course. Authored SAT Physics, Math Level 2, and Chemistry
                    practice books available on Amazon Kindle.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="bars">
                <p className="skillName">Programming Languages and Libraries</p>
                <button className="btn">Java</button>
                <button className="btn">C</button>
                <button className="btn">HTML5</button>
                <button className="btn">CSS</button>
                <button className="btn">JavaScript</button>
                <button className="btn">React</button>
                <button className="btn">SQL</button>
                <button className="btn">Android</button>
                <button className="btn">R</button>

                <p className="skillName">Operating Systems</p>
                <button className="btn">Windows</button>
                <button className="btn">Linux</button>
                <button className="btn">MacOS</button>
              </div>
              {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End skills */}
        </section>
      </React.Fragment>
    );
  }
}
