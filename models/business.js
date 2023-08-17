//Cria o modelo da estrutura da tabela cliente do banco de dados.

'use strict'

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
        class Business extends Model {}

        Business.init({
                cnpj: DataTypes.BIGINT,
                razao_social: DataTypes.STRING(100),
                responsavel: DataTypes.STRING(50),
                inscricao_estadual: DataTypes.BIGINT,
                id_business: DataTypes.BIGINT
        },
        {
                sequelize,
                modelName: 'businesses',
                timestamps: false
        });
        
        return Business
}