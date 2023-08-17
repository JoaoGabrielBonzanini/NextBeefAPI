//Cria o modelo da estrutura da tabela cliente do banco de dados.

'use strict'

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
        class Deliverymans extends Model {}

        Deliverymans.init({
                cnh: DataTypes.BIGINT,
                nome_entregador: DataTypes.STRING(50),
                telefone_entregador: DataTypes.BIGINT,
                id_regiao: DataTypes.BIGINT
        },
        {
                sequelize,
                modelName: 'deliverymans',
                timestamps: false
        });

        return Deliverymans
}