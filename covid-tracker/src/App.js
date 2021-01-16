import Home from './component/Home';
import Main from './component/Main';

import {Redirect, Route, BrowserRouter} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/state/:stateID/" component={Main} />
      </BrowserRouter>
    </div>
  );
}

export default App;
