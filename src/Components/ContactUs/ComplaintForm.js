import React from "react";
import "./contactus.css";

const contactDetails = {
  address:'9th floor Tower-2 NPX by UrbTech sector-153 Noida',
  phone: '+91-9998889999',
  email: 'r.valuestech@gmail.com',
}

function ComplaintForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElem = e.target;
    const formData = new FormData(formElem);
    const output = [];
    for (const [key, value] of formData) {
      output.push(`${key}: ${value}`);
    }
  };
  return (
    <div className="card">
      <span className="title">Reach out to us !</span>
      <br />
      <p>
        If you have any queries, fill the form below with all your details and
        we'll get back to you or feel free to reach us on{" "}
        <u>{contactDetails.phone}</u> or Email us at{" "}
        <u>{contactDetails.email}</u>
      </p>

      <p>
        <b>Office Address-</b> {contactDetails.address}
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="group">
          <input name="name" id="name" placeholder="" type="text" required="" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="group">
          <input
            placeholder=""
            type="email"
            id="email"
            name="email"
            required=""
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="group">
          <input
            placeholder=""
            type="phone"
            id="phone"
            name="phone"
            required=""
          />
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="group">
          <textarea
            placeholder=""
            id="comment"
            name="comment"
            rows="5"
            required=""></textarea>
          <label htmlFor="comment">Comment</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintForm;
