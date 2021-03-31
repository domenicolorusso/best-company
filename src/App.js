import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Customize from "./components/Customize";
import ContactMe from "./components/ContactMe";
import Recap from "./components/Recap";
import Car from "./components/Car";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       
        <NavBar />
        <Switch>
          <Route path="/customize" exact component={Customize} />
          <Route path="/contactme" exact component={ContactMe} />
          <Route path="/recap" exact component={Recap} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
