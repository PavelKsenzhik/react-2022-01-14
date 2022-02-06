import { PureComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/restaurants"/>} />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/" component={() => <h2>404 - Not Found Page :(</h2>} />
          
        </Switch>
      </div>
    );
  }
}
