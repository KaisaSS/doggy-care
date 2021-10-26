import React from "react";
import BookNow from "../booking/BookNow";
import "./about.css";

const About = () => {
  return (
    <div className="container">
      <div className="title">
        <h1> Who am I?</h1>
      </div>
      <div className="grid">
        <div className="text-box">
          <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by
            fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
            quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick
            wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
            quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my
            woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed.
            Flummoxed by job, kvetching W. zaps Iraq.
          </p>
        </div>
        <div className="img-container about-img"></div>
      </div>
      <div className="title">
        <h1>Our services</h1>
      </div>
      <div className="grid">
        <div className="text-box">
          <h3>Walks</h3>
          <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by
            fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
            quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick
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
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by
            fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
            quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick
            wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
            quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my
            woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed.
            Flummoxed by job, kvetching W. zaps Iraq.
          </p>
        </div>
        <div className="img-container daycare-img"></div>
      </div>
      <BookNow />
    </div>
  );
};

export default About;
