import React from "react";

const AboutDog = ({ handleChange }) => {
  return (
    <div>
      <h2>About your dog</h2>
      <div className="input-field">
        <label htmlFor="dog-name">Name</label>
        <input type="text" id="dog-name" onChange={handleChange} required />
      </div>
      <div className="input-field">
        <label htmlFor="dog-age">Age (years)</label>
        <input type="number" id="dog-age" onChange={handleChange} required />
      </div>
      <div className="input-field">
        <label htmlFor="dog-breed">Breed</label>
        <input type="text" id="dog-breed" onChange={handleChange} required />
      </div>
      <div className="input-field">
        <label htmlFor="get-along">How does your dog get along with other animals?</label>
        <textarea id="get-along" className="text-area" onChange={handleChange} required></textarea>
      </div>
      <div className="input-field">
        <label htmlFor="important">Important to know</label>
        <textarea id="important" className="text-area" onChange={handleChange} required></textarea>
      </div>
    </div>
  );
};

export default AboutDog;
