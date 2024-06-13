const express = require('express');
const instrutores = require('./controladores/instrutores')

const rotas = express();

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.listarInstrutoresId)
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor); //não edita todos os campos
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);

module.exports = rotas;