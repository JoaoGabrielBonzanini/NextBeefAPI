//Controlador - Cria as funções de controle da busca.

const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Deliverymans = require('../models/deliverymans');

module.exports = {
        async getAll(req, res) {
                const deliverymans = await Deliverymans(sequelize, Sequelize.DataTypes).findAll()

                res.status(200).send(deliverymans)
        },
        async get(req, res) {
                const deliverymans = await Deliverymans(sequelize, Sequelize.DataTypes).findAll({
                        where: { id: req.params.id }
                });

                res.status(200).send(deliverymans)
        },
        async create (req, res) {
                const deliverymans = await Deliverymans(sequelize, Sequelize.DataTypes).create({
                        cnh: req.body.cnh,
                        nome_entregador: req.body.nome_entregador,
                        telefone_entregador: req.body.telefone_entregador,
                        id_regiao: req.body.id_regiao
                });

                res.status(201).send({
                        message: "Cadastro do motoqueiro feito com sucesso."
                });
        },
        async update (req, res) {
                const deliverymans = await Deliverymans(sequelize, Sequelize.DataTypes).update({
                        cnh: req.body.cnh,
                        nome_entregador: req.body.nome_entregador,
                        telefone_entregador: req.body.telefone_entregador,
                        id_regiao: req.body.id_regiao
                },
                {
                        where: { id: req.params.id }
                });

                res.status(200).send({
                        message: "Alteração do motoqueiro feita com sucesso."
                });
        },
        async delete (req, res) {
                const deliverymans = await Deliverymans(sequelize, Sequelize.DataTypes).destroy({
                        where: { id: req.params.id }
                });

                res.status(202).send({
                        message: "Motoqueiro deletado com sucesso."
                })
        }
}