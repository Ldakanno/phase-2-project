import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import PlantCard from './PlantCard';
import SearchForm from './SearchForm';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path="/plants/search">
            <SearchForm />
          </Route>

          <Route path="/plants/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
