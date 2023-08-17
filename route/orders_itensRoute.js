//Produtos - Define as requisições da rota.

const express = require('express');
const router = express.Router();

const order_itensController = require('../controller/orders_itens');

//Criando Rota HTTP

router.get('/', (req, res) => {
        order_itensController.getAll(req, res)
});

router.get('/:id', (req, res) => {
        order_itensController.get(req, res)
});

router.post('/', (req, res) => {
        order_itensController.create(req, res)  
  
});
  
router.put('/:id', (req, res) => {
          order_itensController.update(req, res)
});
  
router.delete('/:id', (req, res) => {
          order_itensController.delete(req, res)
});
  
module.exports = router;