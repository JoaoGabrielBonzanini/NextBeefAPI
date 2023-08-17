//Produtos - Define as requisições da rota.

const express = require('express');
const router = express.Router();

const peopleController = require('../controller/people');

//Criando rota HTTP

router.get('/', (req, res) => {
        peopleController.getAll(req, res)
})

router.get('/:id', (req, res) => {
        peopleController.get(req, res)
});

router.post('/:id', (req, res) => {
        peopleController.create(req, res)  
});
  
router.put('/:id', (req, res) => {
          peopleController.update(req, res)
});
  
router.delete('/:id', (req, res) => {
          peopleController.delete(req, res)
});
  

module.exports = router;