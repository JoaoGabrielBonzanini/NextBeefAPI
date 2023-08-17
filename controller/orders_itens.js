//Controlador - Cria as funções de controle da busca.

const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Orders_itens = require('../models/orders_itens');

module.exports = {
        async getAll(req, res) {
                const orders_itens = await Orders_itens(sequelize, Sequelize.DataTypes).findAll()

                res.status(200).send(orders_itens)
        },
        async get(req, res) {
                const orders_itens = await Orders_itens(sequelize, Sequelize.DataTypes).findAll({
                        where: { id: req.params.id }
                });

                res.status(200).send(orders_itens)
        },
        async create (req, res) {
                const orders_itens = await Orders_itens(sequelize, Sequelize.DataTypes).create({
                        valor_parcial: req.body.valor_parcial,
                        quantidade: req.body.quantidade,
                        id_pedido: req.body.id_pedido,
                        id_produto: req.body.id_produto
                });

                res.status(201).send({
                        message: "Pré ordem criada com sucesso."
                })
        },
        async update (req, res) {
                const orders_itens = await Orders_itens(sequelize, Sequelize.DataTypes).update({
                        valor_parcial: req.body.valor_parcial,
                        quantidade: req.body.quantidade,
                        id_pedido: req.body.id_pedido,
                        id_produto: req.body.id_produto
                });

                res.status(200).send({
                        message: "Ordem atualizada com sucesso."
                });
        },
        async delete (req, res) {
                const orders_itens = await Orders_itens(sequelize, Sequelize.DataTypes).destroy({
                        where: { id: req.params.id }
                });

                res.status(202).send({
                        message: "Ordem deletada com sucesso."
                })
        }
}