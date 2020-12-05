import React from 'react';
import { render } from 'react-dom';

import Pet from './Pet';

const App = () => {
  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatail" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

// render in the browser with ReactDOM
render(
  <App />,
  // where to render
  document.getElementById('root')
);
