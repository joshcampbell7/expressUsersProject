import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateUser from './Create';
import UserDetails from './UserDetails';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route path="/create">
              <CreateUser/>
            </Route>
            <Route path="/users/:userID">
              <UserDetails/>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>

  );
}

export default App;
