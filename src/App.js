import React, { useState } from 'react';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';

import SearchParams from './SearchParams';
import Details from './Details';
import NavBar from './NavBar';
import ThemeContext from './ThemeContext';

const App = () => {
  const theme = useState('peru');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <NavBar />

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
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
