import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Astronomy from './components/Astronomy';
import Technology from './components/Technology';
import Rover from './components/Rover'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/astronomy" component={Astronomy} />
          <Route exact path="/technology" component={Technology} />
          <Route exact path="/rover" component={Rover} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
