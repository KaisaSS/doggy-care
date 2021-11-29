import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import PriceList from "./PriceList";

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
      <div className="about-container">
        <div className="title">
          <h1>Services</h1>
        </div>
        <div className="grid">
          <div className="text-box">
            <h3>Walks</h3>
            <p>
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced
              by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
              grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick
              wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
              quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my
              woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed.
              Flummoxed by job, kvetching W. zaps Iraq.
            </p>
          </div>
          <div className="img-container walk-img"></div>
        </div>
        <div className="grid">
          <div className="text-box">
            <h3>Daycare</h3>
            <p>
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced
              by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
              grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick
              wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
              quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my
              woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed.
              Flummoxed by job, kvetching W. zaps Iraq.
            </p>
          </div>
          <div className="img-container daycare-img"></div>
        </div>
        <div className="grid">
          <div className="text-box">
            <h3>Boarding</h3>
            <p>
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced
              by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
              grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick
              wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
              quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my
              woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed.
              Flummoxed by job, kvetching W. zaps Iraq.
            </p>
          </div>
          <div className="img-container boarding-img"></div>
        </div>
        <PriceList />
      </div>
      <div>
        <h2>Interested?</h2>
        <p>
          Click <Link to="/booking">here</Link> to book now!
        </p>
      </div>
    </div>
  );
};

export default About;
