//Produtos - Define as requisições da rota.

const express = require('express');
const router = express.Router();

const deliverymansController = require('../controller/deliverymans');

//Criando Rota HTTP

router.get('/', (req, res) => {
        deliverymansController.getAll(req, res)
});

router.get('/:id', (req, res) => {
        deliverymansController.get(req, res)
});

router.post('/', (req, res) => {
        deliverymansController.create(req, res)  
  
});
  
router.put('/:id', (req, res) => {
          deliverymansController.update(req, res)
});
  
router.delete('/:id', (req, res) => {
          deliverymansController.delete(req, res)
});
  
module.exports = router;