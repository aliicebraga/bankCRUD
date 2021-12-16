const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  database: 'db_transferBank'
});
connection.connect(erro => {
  if (erro) throw erro;
  console.log('Estamos conectados.');
});

module.exports = connection;
