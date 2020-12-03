import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Join from './components/Join'
import Login from './components/Login'
import adminPage from './components/adminPage'
import createEvent from './components/createEvent'
import eventPage from './components/eventPage'
import joinPage from './components/joinPage';


function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/joinPage/:id" component={joinPage} />
      <Route path="/join" component={Join} />
      <Route path="/login" component={Login} />
      <Route path="/adminPage/:id" component={adminPage} />
      <Route path="/createEvent/:id" component={createEvent} />
      <Route path="/eventPage/:id" component={eventPage} />
      <Route path="/" component={Home} />
    </Switch>
    </div>
  );
}

export default App;
