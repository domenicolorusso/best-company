import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Customize from "./components/Customize/Customize";
import ContactMe from "./components/ContactMe/ContactMe";
import Recap from "./components/Recap/Recap";
import Car from "./components/Car/Car";

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
          <Route path="/">
            <Redirect to="/customize" exact component={Customize} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
