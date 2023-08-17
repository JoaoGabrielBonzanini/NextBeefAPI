//Cria o modelo da estrutura da tabela cliente do banco de dados.

'use strict'

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
        class Regions extends Model {}

        Regions.init({
                nome_regiao: DataTypes.STRING(50),
                bairros: DataTypes.STRING(50)
        },
        {
                sequelize,
                modelName: 'regions',
                timestamps: false
        });

        return Regions
}