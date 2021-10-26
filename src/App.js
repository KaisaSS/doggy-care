import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookDaycare from "./components/booking/BookDaycare";
import Booking from "./components/booking/Booking";
import BookWalk from "./components/booking/BookWalk";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/booking" component={Booking} />
          <Route path="/booking/walk" component={BookWalk} />
          <Route path="/booking/daycare" component={BookDaycare} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
