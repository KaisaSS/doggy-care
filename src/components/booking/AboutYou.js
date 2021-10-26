import React from "react";

const AboutYou = ({ handleChange }) => {
  return (
    <div>
      <h2>About you</h2>
      <div className="input-field">
        <label htmlFor="first-name">First name</label>
        <input type="text" id="first-name" onChange={handleChange} required />
      </div>
      <div className="input-field">
        <label htmlFor="last-name">Last name</label>
        <input type="text" id="last-name" onChange={handleChange} required />
      </div>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleChange} required />
      </div>
      <div className="input-field">
        <label htmlFor="mobile">Mobile</label>
        <input type="tel" id="mobile" onChange={handleChange} required />
      </div>
      <div className="input-field">
        <label htmlFor="flat">Flat name or number</label>
        <input type="text" id="flat" onChange={handleChange} required />
      </div>
      <div className="input-field">
        <label htmlFor="street">Street name</label>
        <input type="text" id="street" onChange={handleChange} required />
      </div>
      <div className="input-field">
        <label htmlFor="postcode">Post code</label>
        <input type="text" id="postcode" onChange={handleChange} required />
      </div>
      <div className="input-field">
        <label htmlFor="city">City</label>
        <input type="text" id="city" onChange={handleChange} required />
      </div>
    </div>
  );
};

export default AboutYou;
