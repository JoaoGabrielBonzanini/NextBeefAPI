//Controlador - Cria as funções de controle da busca.

const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const People = require('../models/people');

module.exports = {
        async getAll(req, res) {
                const people = await People(sequelize, Sequelize.DataTypes).findAll();

                res.status(200).send(people)
        },
        async get(req, res) {
                const people = await People(sequelize, Sequelize.DataTypes).findAll({
                        where: { id: req.params.id }
        });

                res.status(200).send(people)
        },
        async create(req, res){
                const people = await People(sequelize,Sequelize.DataTypes).create({
                   cpf: req.body.cpf,
                   id_people: req.body.id_people,
                })
                res.status(201).send({
                    message: "Cliente Cadastrado com sucesso"
                })
                },
            async update(req, res){
                const people = await People(sequelize,Sequelize.DataTypes).update({
                        cpf:req.body.cpf,
                        id_people: req.body.id_people
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
                await People(sequelize,Sequelize.DataTypes).destroy({
                    where: {id: req.params.id}
                })
                res.status(200).send({
                    message:('Cliente excluído com sucesso')
                })
        }
};