import { BrowserRouter, Route, Switch } from "react-router-dom";
import Booking from "./components/booking/Booking";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/navbar/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <div className="main-content">
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/booking" component={Booking} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
