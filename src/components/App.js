import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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

          <Route path="/plants/home">
            <PlantCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
