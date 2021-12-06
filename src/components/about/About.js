import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import PriceList from "./PriceList";
import Services from "./Services";

const About = () => {
  return (
    <div className="container">
      <div className="about-container">
        <div className="title">
          <h1> What is DoggyCare?</h1>
        </div>
        <div className="grid">
          <div className="text-box">
            <p>
              Hi, my name is Kaisa and I am the proud owner of <strong>DoggyCare!</strong>
            </p>
            <p>I have always loved dogs, they bring me pure joy and happiness.</p>
            <p>
              I created <strong>DoggyCare</strong> because the thought of leaving my dog in a kennel while I am on
              a holiday or having a night out, was <strong>1000%</strong> out of question. I believe our furry
              friends deserve to have the <em>greatest</em> time too!
            </p>
            <p>
              At <strong>DoggyCare</strong>, your best furry friend can have their own <em>special</em> holiday! I
              treat each dog individually based on their needs and your requests. My goal is to make your dog feel
              like at home, with some extra magic here and there!
            </p>
            <p>
              If you have any questions, don't hesitate to contact me on <strong>info@doggycare.com</strong>
            </p>
          </div>
          <div className="img-container about-img"></div>
        </div>
      </div>
      <div className="text-box">
        <p>
          Find more about our <Link to="/services">services here </Link>
        </p>
        <p>
          Prices are listed on our <Link to="/pricelist">Pricelist</Link>
        </p>
      </div>
      <div className="text-box">
        <h2>Interested?</h2>
        <p>
          Click <Link to="/booking">here</Link> to book now!
        </p>
      </div>
    </div>
  );
};

export default About;
