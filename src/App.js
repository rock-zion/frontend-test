import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as Pages from "./pageloader";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Router>
        <Switch>
          <Route path="/" exact component={Pages.Home} />
        </Switch>
      </Router>
      <h1>Star wars</h1>
    </div>
  );
}

export default App;
