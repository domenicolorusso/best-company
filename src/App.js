import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Customize from "./components/Customize/Customize";
import ContactMe from "./components/ContactMe/ContactMe";
import Recap from "./components/Recap/Recap";

//TODO query string
function App() {

  ///?name=Yaris%201.5&model=GR-S%20MY18&fuel=Hybrid&am=15000&nr=24
//  window.location.search = '?name=Yaris%201.5&model=GR-S%20MY18&fuel=Hybrid&am=15000&nr=24'
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to={`/customize`} component={Customize} />
          </Route>
          <Route path={`/customize`} component={Customize} />
          <Route path={`/contactme`} component={ContactMe} />
          <Route path="/recap" component={Recap} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
