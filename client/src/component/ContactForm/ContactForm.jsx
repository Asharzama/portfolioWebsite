import React, { useState } from "react";
import "./ContactForm.css";
import { MdSend } from "react-icons/md";

const ContactForm = () => {
  const Api = "http://localhost:8000/send";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobtypes: "full time",
    message: "",
  });
  const [alert, setAlert] = useState(false);

  const SendDataToBackend = () => {
    if (formData.name && formData.email) {
      fetch(Api, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {})
        .catch((error) => console.log(error));
      setFormData({
        name: "",
        email: "",
        jobtypes: "full time",
        message: "",
      });
      setAlert(false)
    } else {
      setAlert(true)
    }
  };

  return (
    <div className="container home contact" id="contact">
      <div className="row align-items-center">
        <div className="col-md-5 col-sm-12">
          <div className="contact-form-image">
            <img src="./images/contact.jpg" alt="contact" />
          </div>
        </div>
        <div className="col-md-7 col-sm-12">
          <div className="contact-form">
            <div className="text-center">
              <h4>Contact Me</h4>
              <span className="underline"></span>
            </div>
            <form>
              <div className="contact-form">
                <label htmlFor="name" className="form-label">
                  Name*
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="contact-form">
                <label htmlFor="email" className="form-label">
                  Email*
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="contact-form">
                <label htmlFor="job" className="form-label">
                  Job Types
                </label>
                <select
                  name=""
                  id="job"
                  className="custom-select"
                  onChange={(e) =>
                    setFormData({ ...formData, jobtypes: e.target.value })
                  }
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="contact-form">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your Message Here"
                  className="form-control"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              {alert && <div className="warning">Please fill the required Fields</div>}
              <div className="submit-button">
                <p onClick={SendDataToBackend}>
                  Send Details <MdSend />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
