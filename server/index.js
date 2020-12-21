import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import fs from 'fs';
import App from '../src/App';

// create the server PORT
const PORT = process.env.PORT || 3000;

// read the html
const html = fs.readFileSync('dist/index.html').toString();

// split the html string in parts
const parts = html.split('not rendered');

// create the express app
const app = express();
// serve everything is in the dist directory
app.use('/dist', express.static('dist'));

// define a middleware to use for every request
app.use((req, res) => {
  // definre react markup
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  res.end();
});

console.log('listening on ' + PORT);
app.listen(PORT);
