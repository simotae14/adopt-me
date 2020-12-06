import React from 'react';
import { render } from 'react-dom';

import SearchParams from './SearchParams';

const App = () => {
  return (
    <React.StrictMode>
      <div id="something-important">
        <h1>Adopt Me!</h1>
        <SearchParams />
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
