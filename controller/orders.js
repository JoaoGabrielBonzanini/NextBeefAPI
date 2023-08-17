//Controlador - Cria as funções de controle da busca.

const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Orders = require('../models/orders');

module.exports = {
        async getAll(req, res) {
                const orders = await Orders(sequelize, Sequelize.DataTypes).findAll()

                res.status(200).send(orders)
        },
        async get(req, res) {
                const orders = await Orders(sequelize, Sequelize.DataTypes).findAll({
                        where: { id: req.params.id }
                });

                res.status(200).send(orders)
        },
        async create(req, res){
                const orders = await Orders(sequelize,Sequelize.DataTypes).create({
                        valor_total: req.body.valor_total,
                        data_hora: req.body.data_hora,
                        entrega: req.body.entrega,
                        id_cliente: req.body.id_cliente,
                        id_entregador: req.body.id_entregador
                })
                res.status(201).send({
                    message: "Ordem cadastrada com sucesso"
                })
                },
                async update(req, res){
                const orders = await Orders(sequelize,Sequelize.DataTypes).update({
                        valor_total:req.body.valor_total,
                        data_hora:req.body.data_hora,
                        entrega:req.body.entrega,
                        id_cliente: req.body.id_cliente,
                        id_entregador: req.body.id_entregador
                },
                {
                    where: {id: req.params.id}
                }
                );
                res.status(200).send({
                    message: ('Ordem atualizada com sucesso')
                })
                },

                async delete(req,res){
                        await Orders(sequelize,Sequelize.DataTypes).destroy({
                            where: {id: req.params.id}
                        })
                        res.status(200).send({
                            message:('Ordem excluída com sucesso')
                        })     
}
}