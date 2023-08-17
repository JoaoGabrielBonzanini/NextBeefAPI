//Produtos - Define as requisições da rota.

const express = require('express');
const router = express.Router();

const regionsController = require('../controller/regions');

//Criando Rota HTTP

router.get('/', (req, res) => {
        regionsController.getAll(req, res)
});

router.get('/:id', (req, res) => {
        regionsController.get(req, res)
});

router.post('/', (req, res) => {
        regionsController.create(req, res)  
  
});
  
router.put('/:id', (req, res) => {
          regionsController.update(req, res)
});
  
router.delete('/:id', (req, res) => {
          regionsController.delete(req, res)
});
  
module.exports = router;