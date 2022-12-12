import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import PlantCard from './PlantCard';
import SearchForm from './SearchForm';
import Home from './Home';
import Comment from './Comment';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header greeting="Let's learn about aloe!" title="Aloe Plants"/>
        <Switch>
          <Route path="/search">
            <SearchForm />
          </Route>

          <Route path="/plants/new">
            <Comment />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
