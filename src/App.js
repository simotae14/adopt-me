import React, { useState, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';

import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';

// import deferred for Details
const Details = lazy(() => import('./Details'));

const App = () => {
  const theme = useState('peru');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Suspense fallback={<h1>loading route ...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// render in the browser with ReactDOM
render(
  <App />,
  // where to render
  document.getElementById('root')
);
