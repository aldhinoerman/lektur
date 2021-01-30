import './components/style/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
