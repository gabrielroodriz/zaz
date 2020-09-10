const http = require('http');
const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.get((req, res) => {
  let page = '';
  let route = res.url;

  if (route === '/') page = '<html><body><h1>Principal Página</h1></body></html>';
  else if (route === '/note') page = '<html><body><h1>Página de notas</h1></body></html>';
  else if (route === '/slides') page = '<html><body><h1>Página de slides</h1></body></html>';
  else page = '<html><body><h1>Principal Página</h1></body></html>';

  res.send(page);
});

app.listen(port, () => {
  console.log(`Server running in ${port}`);
});
