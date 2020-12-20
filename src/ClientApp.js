import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

// Add any other browser-only things

hydrate(<App />, document.getElementById('root'));
