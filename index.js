const express = require('express');
const server = express();

server.use(express.json());

const nomes = ['Samuel']


server.get('/nomes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(nomes[index])
});

server.get('/nomes', (req, res) => {

    return res.json(nomes)
});

//cria
server.post('/nomes', (req, res) => {
    const { name } = req.body;
    nomes.push(name);

    return res.json(nomes)
});

//atualiza
server.put('/nomes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    nomes[index] = name;

    return res.json(nomes)
});

//deleta
server.delete('/nomes/:index', (req, res) => {
    const { index } = req.params;

    nomes.splice(index, 1);
    return res.json({msg: 'Nome deletado!'})
});


server.listen(3000, function() {
    console.log('Servidor rodando!')
});