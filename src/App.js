import { BrowserRouter, Route, Switch } from "react-router-dom";
import bookDaycare from "./components/booking/bookDaycare";
import Booking from "./components/booking/Booking";
import bookWalk from "./components/booking/bookWalk";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/booking" component={Booking} />
          <Route path="/booking/walk" component={bookWalk} />
          <Route path="/booking/daycare" component={bookDaycare} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
