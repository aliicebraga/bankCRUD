require('./config/connection');

const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const routerTransfer = require('./transferRoutes');
app.use('/transfer', routerTransfer);

app.get('/', (request, response) => {
  response.send('está funcionando');
});

app.listen(port, () => {
  console.log('Servidor Rodando.');
});
