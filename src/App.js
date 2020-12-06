import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';

import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    <React.StrictMode>
      <div id="something-important">
        <h1>Adopt Me!</h1>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

// render in the browser with ReactDOM
render(
  <App />,
  // where to render
  document.getElementById('root')
);
