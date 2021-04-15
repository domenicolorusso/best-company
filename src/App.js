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
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

//TODO query string
function App() {
  const installValues = useSelector((state) => state.install);
  const [query, setQuery] = useState("");
  ///?name=Yaris%201.5&model=GR-S%20MY18&fuel=Hybrid&am=15000&nr=24
  useEffect(() => {
    setQuery(
      new URLSearchParams({
        name: "Yaris 1.5",
        model: "GR-S MY18",
        fuel: "Hybrid",
        am: installValues.price,
        nr: installValues.installments,
      })
    );

  }, [installValues.installments, installValues.price]);
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
          <Route path="/contactme" component={ContactMe} />
          <Route path="/recap" component={Recap} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
