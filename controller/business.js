//Controlador - Cria as funções de controle da busca.

const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Business = require('../models/business');

module.exports = {
        async getAll(req, res) {
                const business = await Business(sequelize, Sequelize.DataTypes).findAll();

                res.status(200).send(business)
        },
        async get(req, res) {
                const business = await Business(sequelize, Sequelize.DataTypes).findAll({
                        where: { id: req.params.id }
                });

                res.status(200).send(business)
        },
        async create(req, res){
                const business = await Business(sequelize,Sequelize.DataTypes).create({
                        cnpj:req.body.cnpj,
                        razao_social:req.body.razao_social,
                        responsavel:req.body.responsavel,
                        inscricao_estadual:req.body.inscricao_estadual,
                        id_business: req.body.id_business
                })
                res.status(201).send({
                    message: "Cliente cadastrado com sucesso"
                })
                },
            async update(req, res){
                const business = await Business(sequelize,Sequelize.DataTypes).update({
                        cnpj: req.body.cnpj,
                        razao_social: req.body.cnpj,
                        responsavel: req.body.responsavel,
                        inscricao_estadual: req.body.inscricao_estadual,
                        id_business: req.body.id_business
                },
                {
                    where: {id: req.params.id}
                }
                );
                res.status(200).send({
                    message: ('Cliente atualizado com sucesso')
                })
                },
        
            async delete(req,res){
                await Business(sequelize,Sequelize.DataTypes).destroy({
                    where: {id: req.params.id}
                })
                res.status(200).send({
                    message:('Cliente excluído com sucesso')
                })
        }
        















}