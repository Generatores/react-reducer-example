import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./blocks/Header";
import Footer from "./blocks/Footer";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
