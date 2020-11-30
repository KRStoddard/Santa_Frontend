import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Join from './components/Join'
import Login from './components/Login'
function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/join" component={Join} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
    </div>
  );
}

export default App;
