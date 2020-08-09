import React from "react";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="container-form">
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xgenqeby"
          method="POST"
        >
          <h2 className="contactMe">Contact Me</h2>
          <label style={{ margin: "40px" }}></label>
          <input
            style={{ margin: "auto", lineHeight: "10px" }}
            size={35}
            type="email"
            name="email"
            placeholder="Your email"
          />
          <label style={{ margin: "40px" }}></label>
          <input
            style={{ margin: "auto" }}
            size="35"
            type="text"
            name="message"
            placeholder="Your message"
          />
          {status === "SUCCESS" ? (
            <p style={{ textAlign: "center", fontSize: "20px" }}>Thanks!</p>
          ) : (
            <button className="button-submit">Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
