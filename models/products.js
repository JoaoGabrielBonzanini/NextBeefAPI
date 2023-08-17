//Cria o modelo da estrutura da tabela cliente do banco de dados.

'use strict'

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
        class Products extends Model {}

        Products.init({
                descricao_produto: DataTypes.STRING(50),
                valor_produto: DataTypes.DECIMAL(6,2),
                corte: DataTypes.STRING(30),
                data_vencimento: DataTypes.DATE,
                marca: DataTypes.STRING(30),
                tipo: DataTypes.STRING(40)
        },
        {
                sequelize,
                modelName: 'products',
                timestamps: false
        });

        return Products
}