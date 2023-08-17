//Produtos - Define as requisições da rota.

const express = require('express');
const router = express.Router();

const businessController = require('../controller/business');

//Criando rota HTTP

router.get('/', (req, res) => {
        businessController.getAll(req, res)
});

router.get('/:id', (req, res) => {
        businessController.get(req, res)
});

router.post('/',(req, res) =>{
        businessController.create(req, res)
});

router.put('/:id',(req, res) =>{
        businessController.update(req, res)
});

router.delete('/:id',(req, res) =>{
        businessController.delete(req, res)
});


module.exports = router;