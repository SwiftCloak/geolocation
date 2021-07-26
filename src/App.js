import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Submission";
import thankyou from "./components/thankyou";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/geo" component={Locate} exact /> */}
        <Route path="/thankyou" component={thankyou} />
      </Switch>
    </Router>
  );
}

export default App;
