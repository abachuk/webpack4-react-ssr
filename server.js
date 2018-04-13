import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
const content = renderToString(<App />);

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="client.bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(5000, () => {
  console.log('Listening on prot 5000');
});