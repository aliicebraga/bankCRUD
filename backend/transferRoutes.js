const router = require('express').Router();

const { response, request } = require('express');
const connection = require('./config/connection');

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//rota para listar os dados do database

router.get('/', (request, response) => {
  // criando um query para selecionar todos os dados da tabela tb_tarefas
  // para ordenar por um atributo - usar order by nomeDoAtributo asc
  let sql = 'select * from tb_transfer';
  connection.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    response.json(rows);
  });
});

//rota para mostrar apenas uma tarefa de acordo com o seu id
router.get('/:id', (request, response) => {
  const { id } = request.params;
  let sql = 'select * from tb_transfer where id_transfer = ?';
  connection.query(sql, [id], (erro, rows, fields) => {
    if (erro) throw erro;
    response.json(rows[0]);
  });
});

//rota para deletar uma tarefa específica através do id
router.delete('/:id', (request, response) => {
  const { id } = request.params;
  let sql = `delete from tb_transfer where id_transfer = ${id}`;
  connection.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    response.json({ status: 'transferencia excluída com sucesso' });
  });
});

// rota para incluir uma tarefa
router.post('/', urlencodedParser, (request, response) => {
  const { nome_cliente, conta_cliente, valor } = request.body;
  let sql = `insert into tb_transfer(nome_cliente, conta_cliente, valor) values('${nome_cliente}', '${conta_cliente}','${valor}')`;
  connection.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    response.json({ status: 'transferencia concluída com sucesso' });
  });
});

// rota para edição de registros
router.put('/:id', urlencodedParser, (request, response) => {
  const { id } = request.params;
  const { nome_cliente, conta_cliente, valor } = request.body;

  let sql = `update tb_transfer set nome_cliente = '${nome_cliente}',conta_cliente = '${conta_cliente}', valor = '${valor}' where id_transfer = '${id}'`;
  connection.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    response.json({ status: 'transferencia atualizada' });
  });
});

module.exports = router;
