//Cria o modelo da estrutura da tabela cliente do banco de dados.

'use strict'

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
        class People extends Model {}

        People.init({
                cpf: DataTypes.BIGINT,
                id_people: DataTypes.BIGINT
        },
        {
                sequelize,
                modelName: 'people',
                timestamps: false
        });

        return People
}