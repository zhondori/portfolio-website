import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Home from './Home/Home';
import Blog from "./Blog/Blog";
import Not from './Not/Not';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/about" component={About} />
            <Route component={Not} />
          </Switch>    
      </BrowserRouter>
    </div>
  );
}

export default App;