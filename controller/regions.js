//Controlador - Cria as funções de controle da busca.

const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Regions = require('../models/regions');
const { update } = require('./products');
const regions = require('../models/regions');

module.exports = {
        async getAll(req, res) {
                const regions = await Regions(sequelize, Sequelize.DataTypes).findAll()

                res.status(200).send(regions)
        },
        async get(req, res) {
                const regions = await Regions(sequelize, Sequelize.DataTypes).findAll({
                        where: { id: req.params.id }
                });

                res.status(200).send(regions)
        },
        async create(req, res) {
                const regions = await Regions(sequelize, Sequelize.DataTypes).create({
                                nome_regiao: req.body.nome_regiao,
                                bairros: req.body.bairros
                        });

                res.status(201).send({
                        message: "Cadastro feito com sucesso."
                });
        },
        async update(req, res) {
                const regions = await Regions(sequelize, Sequelize.DataTypes).update({
                                nome_regiao: req.body.nome_regiao,
                                bairros: req.body.bairros
                        });

                res.status(200).send({
                        message: "Alteração do produto feita com sucesso."
                });
        },
        async delete (req, res) {
                const regions = await Regions(sequelize, Sequelize.DataTypes).destroy({
                    where: { id: req.params.id}    
                });
                res.status(202).send({
                        message: "Produto deletado com sucesso."
                })
        }
}        
