//Controlador - Cria as funções de controle da busca.

const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Products = require('../models/products');

module.exports = {
        async getAll(req, res) {
                const products = await Products(sequelize, Sequelize.DataTypes).findAll()

                res.status(200).send(products)
        },
        async get(req, res) {
                const products = await Products(sequelize, Sequelize.DataTypes).findAll({
                        where: { id: req.params.id }
                });

                res.status(200).send(products)
        },
        async create (req, res) {
                const products = await Products (sequelize, Sequelize.DataTypes).create({
                        descricao_produto: req.body.descricao_produto,
                        valor_produto: req.body.valor_produto,
                        corte: req.body.corte,
                        data_vencimento: req.body.data_vencimento,
                        marca: req.body.marca,
                        tipo: req.body.tipo
                });

                res.status(201).send({
                        message: "Cadastro feito com sucesso."
                });
        },
        async update (req, res) {
                const products = await Products (sequelize, Sequelize.DataTypes).update({
                        descricao_produto: req.body.descricao_produto,
                        valor_produto: req.body.valor_produto,
                        corte: req.body.valor_produto,
                        data_vencimento: req.body.data_vencimento,
                        marca: req.body.marca,
                        tipo: req.body.tipo
                },
                {
                        where: { id: req.params.id }
                });

                res.status(200).send({
                        message: "Alteração do produto feita com sucesso."
                });
        },
        async delete (req, res) {
                const products = await Products (sequelize, Sequelize.DataTypes).destroy({
                        where: { id: req.params.id }
                });

                res.status(202).send({
                        message: "Produto deletado com sucesso."
                })
        }
}