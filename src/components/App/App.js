import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from 'config/routes';
import TabListener from 'components/TabListener/TabListener';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <main>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </main>
          <TabListener/>
          <ScrollToTop/>
        </>
      </Router>
    );
  }
}


export default App;
