import React from "react";
import { useHistory } from "react-router";

const HomeAbout = () => {
  const history = useHistory();

  const routeChange = () => {
    history.push("/about");
  };

  return (
    <div className="home-about">
      <div className="title">
        <h1> Why choose us?</h1>
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
          <div className="btn">
            <button onClick={routeChange}>Read more</button>
          </div>
        </div>
        <div className="img-container why-us-img"></div>
      </div>
    </div>
  );
};

export default HomeAbout;
